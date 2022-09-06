<script lang="ts" setup>
import PageHeader from "./sections/PageHeader.vue";</script>

<template>
  <PageHeader />
  <router-view />
</template>

<style lang="scss">

body, html {
  background-color: #222222;
  min-height: 100vh;
  width: 100%;
  color: #fff;
  font-family: "Jost", sans-serif;
}

h1, h2, h3 {
  font-family: "KENOKY", sans-serif;
}

section {
  width: 100%;
}
</style>