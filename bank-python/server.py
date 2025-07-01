from fastapi import FastAPI, Response
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
import time

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


@app.post("/login")
async def login(pubkey: str, certificate: str, response: Response) -> None:
    "Login at the bank. Currently not using any crypto!"
    collection = setup_connection()

    if is_revoked(collection, pubkey):
        response.status_code = 401  # Unauthorized
    else:
        log_successful_login(collection, pubkey, certificate)


@app.post("/logout")
async def logout() -> None:
    return


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

    # Use LAN profile to demo cluster down
    #options.apply_profile('wan_development')
    cluster = Cluster(endpoint, options)

    # Wait until the cluster is ready for use.
    cluster.wait_until_ready(timedelta(seconds=5))

    # get a reference to our bucket
    cb = cluster.bucket(bucket_name)
    return cb.scope("id-card-sc").collection("revoked-ids")


def is_revoked(collection, pubkey):
    result = collection.get("revoked-ids")
    revocation_list = result.content_as[list]
    for res in revocation_list:
        if res["pub-key"] == pubkey:
            return True
    return False


def log_successful_login(collection, pubkey, certificate):
    try:
        log = collection.get("log").content_as[list]
    except couchbase.exceptions.DocumentNotFoundException:
        log = []
    log.append(time.ctime() + " Logged in user " + pubkey + ", certificate: " + certificate)
    collection.upsert("log", log)
