<script lang="ts" setup>
const props = defineProps<{
  name: string,
  position: string,
  caption: string,
  imageUrl: string
}>();
</script>

<template>
  <div class="team-employee-badge">
    <img
      :src="imageUrl"
      :alt="name"
    >
    <span class="name"><b>{{ props.name }},</b> {{ props.position }}</span>
    <span class="caption">{{ props.caption }}</span>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/vars";
@import "../assets/scss/mixins";

.team-employee-badge {
  @include media(min, md) {
    background-image: $bronze-gradient;
    color: #000;

    display: grid;

    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;

    border-radius: 16px;

    padding: 40px;
  }

  @include media(max, md) {
    color: #fff;

    display: flex;
    flex-direction: column;
  }


  font-family: "Jost", sans-serif;

  gap: 30px;

  img {
    grid-column: 1;
    grid-row: 1 / 3;

    border-radius: 12px;
    object-fit: cover;

    @include media(min, md) {
      height: 280px;
    }


    @include media(max, md) {
      aspect-ratio: 1;
    }
  }

  span.name {
    place-self: end start;

    font-weight: 300;
    font-size: 32px;

    b {
      text-transform: uppercase;
      font-weight: 700;
    }
  }

  span.caption {
    place-self: start;

    font-size: 18px;
    width: 70%;

    @include media(max, md) {
      width: 100%;
    }
  }
}
</style>