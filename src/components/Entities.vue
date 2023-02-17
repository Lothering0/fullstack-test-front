<script setup lang="ts">
import type { id } from "../helpers/types";

defineProps<{
  readonly data: id[];
  readonly entity: "Сделка" | "Контакт" | "Компания";
}>();
</script>

<template>
  <div class="entities" v-if="data.length">
    <div v-for="item in data" class="entities__item">
      <span class="entities__id">#{{ item }}</span>
      <span class="entities__name">{{ entity }}</span>
    </div>
  </div>
</template>

<style>
.entities {
  border: var(--border);
  border-radius: var(--border-radius);
  padding: var(--padding);
}

.entities__item {
  display: flex;
  justify-content: space-between;
}

.entities__id {
  color: #777;
}
</style>
