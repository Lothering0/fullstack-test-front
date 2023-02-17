import { request } from "./axios";
import type { Entity } from "../helpers/types";

export const createContact = () => request<Entity>("post", "contacts");
