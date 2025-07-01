from fastapi import FastAPI
from pydantic import BaseModel
import uuid
from fastapi.middleware.cors import CORSMiddleware
from datetime import timedelta

# needed for any cluster connection
from couchbase.auth import PasswordAuthenticator
from couchbase.cluster import Cluster
# needed for options -- cluster, timeout, SQL++ (N1QL) query, etc.
from couchbase.options import (ClusterOptions, ClusterTimeoutOptions,
                               QueryOptions)

import couchbase.exceptions

import os
import json


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class EnrollReply(BaseModel):
    signed_cert: str
    signature: str


@app.post("/enroll")
async def enroll(name: str, pubkey: str) -> EnrollReply:
    "Register your secure token at the ID provider. Currently not using any crypto!"
    statement = f"I verified that person '{name}' possess a secure token with pubkey '{pubkey}'"
    return EnrollReply(signed_cert=statement, signature=str(uuid.uuid4()))


@app.post("/revoke")
async def revoke(pubkey: str) -> str:
    "Revoke a secure token. Currently doesn't check if the caller is allowed to."
    database_revoke_pubkey(pubkey)
    return "OK"


def setup_connection():
    with open("credentials.json") as f:
        creds = json.load(f)

    endpoint = creds["host"]
    username = creds["username"]
    password = creds["password"]
    bucket_name = creds["bucket"]

    # Connect options - authentication
    auth = PasswordAuthenticator(username, password)

    # get a reference to our cluster
    options = ClusterOptions(auth)
    # Sets a pre-configured profile called "wan_development" to help avoid latency issues
    # when accessing Capella from a different Wide Area Network
    # or Availability Zone(e.g. your laptop).
    options.apply_profile('wan_development')
    cluster = Cluster(endpoint, options)

    # Wait until the cluster is ready for use.
    cluster.wait_until_ready(timedelta(seconds=5))

    # get a reference to our bucket
    cb = cluster.bucket(bucket_name)
    return cb.scope("id-card-sc").collection("revoked-ids")


print("Connecting...")
collection = setup_connection()
print("Connected")


def database_revoke_pubkey(pubkey):
    """Append an entry to the list in the database"""
    try:
        result = collection.get("revoked-ids")
        revocation_list = result.content_as[list]
    except couchbase.exceptions.DocumentNotFoundException:
        revocation_list = []

    print(f"{revocation_list=}")
    revocation_list.append({"pub-key": pubkey})
    collection.upsert("revoked-ids", revocation_list)

    print(f"Uploaded {revocation_list=}")
