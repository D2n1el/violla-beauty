<script lang="ts" setup>

</script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/vars";
@import "../assets/scss/mixins";

.container {
  @include media(min, lg) {
    width: map-get($sizes, "lg");
  }

  @include media(max, lg) {
    width: 100vw;
  }

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>