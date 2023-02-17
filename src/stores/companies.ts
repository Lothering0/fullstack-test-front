import { ref } from "vue";
import { defineStore } from "pinia";
import { createCompany } from "../api/companies";
import type { id, Entity } from "../helpers/types";

export const useCompaniesStore = defineStore("companies", () => {
  const companies = ref<id[]>([]);

  async function create(): Promise<Entity> {
    const { data } = await createCompany();
    companies.value.push(data.id);

    return data;
  }

  return { companies, create };
});
