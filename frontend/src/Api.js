const idProviderBasePath = "http://127.0.0.1:8000";
const bankBasePath = "http://127.0.0.1:8001";

export async function Ping() {
  return await fetch(idProviderBasePath + "/ping", {
    method: "GET",
  });
}

export async function PostPid(pin) {
  const pubkey = crypto.getRandomValues(new Uint8Array(16)).join("");
  localStorage.setItem("pubkey", pubkey);
  const url = new URL(idProviderBasePath + "/enroll");
  url.searchParams.append("name", pin);
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

export async function LoginBank(cert, pubkey) {
  const url = new URL(bankBasePath + "/login");
  url.searchParams.append("certificate", cert);
  url.searchParams.append("pubkey", pubkey);

  return await fetch(url.toString(), {
    method: "POST",
  });
}
