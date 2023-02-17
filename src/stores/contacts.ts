import { ref } from "vue";
import { defineStore } from "pinia";
import { createContact } from "../api/contacts";
import type { id, Entity } from "../helpers/types";

export const useContactsStore = defineStore("contacts", () => {
  const contacts = ref<id[]>([]);

  async function create(): Promise<Entity> {
    const { data } = await createContact();
    contacts.value.push(data.id);

    return data;
  }

  return { contacts, create };
});
