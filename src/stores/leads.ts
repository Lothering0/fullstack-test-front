import { ref } from "vue";
import { defineStore } from "pinia";
import { createLead } from "../api/leads";
import type { id, Entity } from "../helpers/types";

export const useLeadsStore = defineStore("leads", () => {
  const leads = ref<id[]>([]);

  async function create(): Promise<Entity> {
    const { data } = await createLead();
    leads.value.push(data.id);

    return data;
  }

  return { leads, create };
});
