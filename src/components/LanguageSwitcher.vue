<script lang="ts" setup>
const { locale } = useI18n();

const nextLocale = computed(() => locale.value === "sv" ? "en" : "sv");

const switchLocale = () => {
  window.location.replace(`/${nextLocale.value}`);
};
</script>

<template>
  <button @click="switchLocale">
    {{ nextLocale }}
  </button>
</template>

<style lang="scss" scoped>
button {
  text-transform: uppercase;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  color: black;
  font-family: "Pragmatica", sans-serif;
  font-weight: 400;
  display: block;
}
</style>