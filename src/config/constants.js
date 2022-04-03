export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://sv.takeoutbook.kr"
    : "http://localhost:8080";
