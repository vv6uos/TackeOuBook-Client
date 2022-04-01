export const API_URL =
  process.env.NODE_ENV === "production"
    ? "http://sv.takeoutbook.kr"
    : "http://localhost:8080";
