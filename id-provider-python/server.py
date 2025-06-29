from fastapi import FastAPI
from pydantic import BaseModel
import uuid

app = FastAPI()

class EnrollReply(BaseModel):
    signed_cert: str
    signature: str


@app.post("/enroll")
async def enroll(personnummer: str, pubkey: str) -> EnrollReply:
    "Register your secure token at the ID provider. Currently not using any crypto!"
    statement = f"I verified that person '{personnummer}' possess a secure token with pubkey '{pubkey}'"
    return EnrollReply(signed_cert=statement, signature=str(uuid.uuid4()))


@app.post("/revoke")
async def revoke(pubkey: str) -> str:
    "Revoke a secure token. Currently doesn't check if the caller is allowed to."
    return "OK"
