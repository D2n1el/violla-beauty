<script lang="ts" setup>
const props = defineProps<{
  title: string | {
    title: string;
    description?: string;
  },
  items: {
    title: string,
    time?: string,
    price: string | number,
    description?: string,
    pricePer?: string
  }[]
}>();
</script>

<template>
  <div class="price-list-group">
    <h3
      v-if="typeof props.title === 'string'"
      class="heading"
    >
      {{ props.title }}
    </h3>
    <div
      v-else-if="typeof props.title === 'object'"
      class="heading-big"
    >
      <h3>{{ props.title.title }}</h3>
      <span v-if="props.title.description">{{ props.title.description }}</span>
    </div>
    <div class="items">
      <div
        v-for="(item, id) of props.items"
        :key="id"
        class="item"
      >
        <span class="title">{{ item.title }}</span>
        <span class="line" />
        <span
          v-if="item.description"
          class="description"
        >{{ item.description }}</span>
        <span
          v-if="item.time"
          class="time"
        >{{ item.time }}</span>
        <span class="price">
          {{ item.price.toString() }}<b>kr.</b>
          <span
            v-if="item.pricePer"
            class="price-per"
          >/{{ item.pricePer }}</span></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/placeholders";
@import "../assets/scss/mixins";

.price-list-group {
  display: flex;
  flex-direction: column;

  gap: 25px;

  h3.heading {
    @extend %text-bronze;
    font-size: 36px;
  }

  .heading-big {
    display: flex;
    flex-direction: column;
    padding-block: 50px;
    gap: 50px;

    h3 {
      @extend %text-bronze;

      @include media(min, md) {
        font-size: 133px;
      }

      @include media(max, md) {
        font-size: 90px;
      }
    }

    span {
      font-family: "Jost", sans-serif;
      display: inline-block;

      font-weight: 400;
      color: #9F9F9F;
      width: 80%;
    }
  }

  .items {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .item {
      display: grid;

      grid-template-columns: auto 1fr auto;
      grid-template-rows: repeat(3, auto);

      font-family: "Jost", sans-serif;

      .line {
        position: relative;

        top: -8px;

        grid-row: 1;
        grid-column: 2;

        width: 99%;
        place-self: end center;

        border-bottom: 2px solid #343434;
      }

      .title {
        grid-row: 1;
        grid-column: 1;
        font-weight: 600;
        font-size: 20px;

        @include media(max, md) {
          font-size: 16px;
        }
      }

      .description {
        grid-column: 1 / 3;
        grid-row: 2;
      }

      .time {
        grid-column: 1 / 3;
        grid-row: 3;
      }

      .price {
        grid-column: 3;
        grid-row: 1;

        font-weight: 500;
        font-size: 20px;

        b {
          @extend %text-bronze;
          margin-inline-start: 5px;
        }

        @include media(max, md) {
          font-size: 16px;
        }
      }

      .time, .description {
        font-size: 16px;
        font-weight: 300;
        color: #B6B6B6;

        @include media(max, md) {
          font-size: 14px;
        }
      }
    }
  }
}
</style>