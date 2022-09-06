<script lang="ts" setup>
const props = defineProps<{
  title: string,
  caption?: string
}>();
</script>

<template>
  <div class="section-title">
    <h2>{{ props.title }}</h2>
    <span
      v-if="props.caption"
      class="caption"
    >{{ props.caption }}</span>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/placeholders";
@import "../assets/scss/mixins";

.section-title {
  text-align: center;

  h2 {
    @extend %text-bronze;

    @include media(max, md) {
      font-size: 36px;
    }

    font-size: 48px;
  }

  span {
    font-family: "Jost", sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: #C1C1C1;
    text-transform: uppercase;
  }
}
</style>