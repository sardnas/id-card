const idProviderBasePath = "http://127.0.0.1:8000";
const bankBasePath = "http://localhost:8080";

export async function Ping() {
  return await fetch(idProviderBasePath + "/ping", {
    method: "GET",
  });
}

export async function PostPid(name) {
  const pubkey = crypto.getRandomValues(new Uint8Array(32)).toString();
  const url = new URL(idProviderBasePath + "/enroll");
  url.searchParams.append("name", name);
  url.searchParams.append("pubkey", pubkey);

  return await fetch(url.toString(), {
    method: "POST",
  });
}

export async function PingPublicApi() {
  return await fetch("https://dog.ceo/api/breeds/image/random", {
    method: "GET",
  });
}

export async function SignIn(pid) {
  return await fetch(bankBasePath + "/endpoint", {
    method: "POST",
    body: JSON.stringify({ pid }),
    headers: { "Content-Type": "application/json" },
  });
}
