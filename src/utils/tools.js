export function isLogined() {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
}
export function gerToken() {
  return localStorage.getItem("token");
}
export function setToken(v) {
  return localStorage.setItem("token", v);
}
export const serverUrl = "http://localhost:3009";
