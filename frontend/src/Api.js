const publishedBasePath = "https://62.77.156.65:8443";
const localBasePath = "http://localhost:8080";

//ping the base path to the api
export async function Ping() {
  return await fetch("https://api.publicapis.org/entries", {
    method: "GET",
  });
}

// become memmber
export async function CreateUser(username, pin) {
  return await fetch(localBasePath + "/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ username, pin }),
    headers: { "Content-Type": "application/json" },
  });
}

// log in
export async function SignIn(username, pin) {
  return await fetch(localBasePath + "/api/auth/signin", {
    method: "POST",
    body: JSON.stringify({ username, pin }),
    headers: { "Content-Type": "application/json" },
  });
}
