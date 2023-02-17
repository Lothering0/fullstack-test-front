import { request } from "./axios";
import type { Entity } from "@/helpers/types";

export const createLead = () => request<Entity>("post", "leads");
