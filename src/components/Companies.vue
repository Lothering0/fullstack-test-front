<script setup lang="ts">
import Entities from "./Entities.vue";
import { useCompaniesStore } from "../stores";

const companiesStore = useCompaniesStore();
</script>

<template>
  <Entities :data="companiesStore.companies" entity="Компания" />
</template>
