import { request } from "./axios";
import type { Entity } from "../helpers/types";

export const createCompany = () => request<Entity>("post", "companies");
