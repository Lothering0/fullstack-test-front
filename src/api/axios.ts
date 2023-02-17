import axios, { type Method } from "axios";

const url = (import.meta.env.URL ?? "http://localhost:3000");

export const request = <T = unknown>(
  method: Method,
  path: "leads" | "contacts" | "companies"
) => axios<T>({
  method,
  url: `${url}/${path}`,
  withCredentials: true
});
