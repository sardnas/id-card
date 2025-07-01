const idProviderBasePath = "http://127.0.0.1:8000/docs";
const localBasePath = "http://localhost:8080";

// //ping the base path to the api
// export async function Ping() {
//   return await fetch(idProviderBasePath, {
//     method: "GET",
//   });
// }
export async function Ping() {
  return await fetch(idProviderBasePath, {
    method: "GET",
  });
}

export async function PingPublicApi() {
  return await fetch("https://dog.ceo/api/breeds/image/random", {
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
