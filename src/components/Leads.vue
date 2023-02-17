<script setup lang="ts">
import Entities from "./Entities.vue";
import { useLeadsStore } from "../stores";

const leadsStore = useLeadsStore();
</script>

<template>
  <Entities :data="leadsStore.leads" entity="Сделка" />
</template>
