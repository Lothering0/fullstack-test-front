<script setup lang="ts">
import { withDefaults, computed } from "vue";

const props = withDefaults(defineProps<{
  readonly loading: boolean;
}>(), {
  loading: false
});

const classes = computed(() => ({
  button: true,
  "button--loading": props.loading
}));
</script>

<template>
  <button :class="classes">
    <img class="button__icon" v-show="loading" src="@/assets/icons/loading.svg">
    <span v-show="!loading"><slot /></span>
  </button>
</template>

<style>
.button {
  padding: var(--padding) 15px;
  background-color: var(--c-active);
  border-radius: var(--border-radius);
  color: white;

  transition: var(--transition);
}

.button:hover {
  background-color: var(--c-active-hover);
}

.button[disabled] {
  outline: 1px solid #999;
  background: white;
  color: #444;

  opacity: 0.5;
  cursor: not-allowed;
}

.button--loading {
  user-select: none;
  cursor: default;
}

.button__icon {
  width: 20px;
  height: 20px;

  animation: spinning 1.5s linear infinite;
  opacity: 0.5;
}

@keyframes spinning {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
