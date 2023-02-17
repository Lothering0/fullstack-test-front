<script setup lang="ts">
import { ref, computed } from "vue";
import { Leads, Companies, Contacts } from "@/components";
import { Dropdown, Button } from "@/UI";
import { useLeadsStore, useCompaniesStore, useContactsStore } from "./stores";

const leadsStore = useLeadsStore();
const companiesStore = useCompaniesStore();
const contactsStore = useContactsStore();

const isLoading = ref(false);
const selectedItem = ref("Не выбрано");
const dropdownItems = ["Не выбрано", "Сделка", "Контакт", "Компания"];
const isButtonDisabled = computed(() => {
  return selectedItem.value === dropdownItems[0]
});

const create = async () => {
  isLoading.value = true;

  switch (selectedItem.value) {
    case "Сделка":
      await leadsStore.create();
      break;
    case "Контакт":
      await contactsStore.create();
      break;
    case "Компания":
      await companiesStore.create();
      break;
  }

  isLoading.value = false;
};
</script>

<template>
  <main>
    <Dropdown
      v-model="selectedItem"
      placeholder="Выберите сущность"
      :items="dropdownItems"
    />
    <Button
      :loading="isLoading"
      :disabled="isButtonDisabled"
      @click="create"
    >Создать</Button>
    <Leads />
    <Companies />
    <Contacts />
  </main>
</template>

<style scoped>
main {
  width: 370px;
  margin: 20px;
}

main > * + * {
  margin-top: 10px;
}
</style>
