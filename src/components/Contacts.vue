<script setup lang="ts">
import Entities from "./Entities.vue";
import { useContactsStore } from "../stores";

const contactsStore = useContactsStore();
</script>

<template>
  <Entities :data="contactsStore.contacts" entity="Контакт" />
</template>
