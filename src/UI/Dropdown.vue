<script setup lang="ts">
import { ref, withDefaults, computed } from 'vue';

const props = withDefaults(defineProps<{
  readonly placeholder: string;
  readonly items: string[];
  readonly selectedItem: number;
}>(), {
  placeholder: "Выберите",
  selectedItem: 0
});

const emit = defineEmits(["select", "update:modelValue"]);

const currentText = ref("");
const showItems = ref(false);
const toggle = () => (showItems.value = !showItems.value);
const onClickOutside = () => (showItems.value = false);

const selectedItem = ref(props.items[props.selectedItem]);
const selectItem = (item: string) => {
  currentText.value = item;
  selectedItem.value = item;
  showItems.value = false;
  emit("select", item);
  emit("update:modelValue", item);
};

const iconClasses = computed(() => ({
  dropdown__icon: true,
  "dropdown__icon--rotated": showItems.value
}));
</script>

<template>
  <div class="dropdown" v-click-outside="onClickOutside">
    <div class="dropdown__field" @click="toggle">
      <span v-if="currentText">{{ currentText }}</span>
      <span class="dropdown__placeholder" v-else>{{ placeholder }}</span>
      <img :class="iconClasses" src="@/assets/icons/chevron-down.svg">
    </div>
    <div class="dropdown__items" v-show="showItems">
      <div
        v-for="item in items"
        class="dropdown__item"
        @click="selectItem(item)"
      >{{ item }}</div>
    </div>
  </div>
</template>

<style>
.dropdown {
  position: relative;
  cursor: pointer;
}

.dropdown__field {
  display: flex;

  height: 42px;
  padding: var(--padding);
}

.dropdown__placeholder {
  color: #777;
}

.dropdown__icon {
  width: 20px;
  height: 20px;

  margin-left: auto;
  transition: var(--transition-fast);
}

.dropdown__icon--rotated {
  transform: rotate(180deg);
}

.dropdown__field,
.dropdown__items {
  background-color: white;
  border: var(--border);
  border-radius: var(--border-radius);
}

.dropdown__items {
  position: absolute;
  top: 42px;
  left: 0;
  right: 0;

  overflow: hidden;
  z-index: 2;
}

.dropdown__item {
  padding: var(--padding);

  transition: var(--transition-fast);
}

.dropdown__item:hover {
  background-color: #eee;
}
</style>
