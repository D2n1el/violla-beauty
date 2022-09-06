<script lang="ts" setup>
import { useScrollToElementById } from "~/composables/scroll-to-element";

const { t } = useI18n();

const scrollToPricelist = useScrollToElementById("home-section-price-list");
</script> 

<template>
  <section id="home-section-main">
    <PageContainer class="container">
      <div class="title">
        <h1>{{ t("sections.main.title") }}</h1>
        <span>{{ t("sections.main.title-caption") }}</span>
      </div>
      <p class="description">
        {{ t("sections.main.text") }}
      </p>
      <div class="buttons">
        <PageButton
          class="filled-bronze font-bold"
          @click="scrollToPricelist"
        >
          {{ t("sections.main.button") }}
        </PageButton>
      </div>
    </PageContainer>
  </section>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/placeholders";
@import "../../assets/scss/mixins";

#home-section-main {
  padding-bottom: 50px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 50px;
  }

  .title {
    h1 {
      @extend %text-bronze;
      font-family: "Birthstone", sans-serif;

      @include media(min, lg) {
        font-size: 150px;
      }

      @include media(max, lg) {
        font-size: 64px;
      }

      letter-spacing: 0.05em;
    }

    span {
      position: relative;

      @include media(min, lg) {
        top: -30px;
      }


      font-family: "Inter", sans-serif;
      text-transform: uppercase;
      font-weight: 300;
      color: #C1C1C1;
      font-size: 16px;
    }
  }

  p.description {
    font-family: "Jost", sans-serif;
    font-weight: 300;
    font-size: 18px;
    width: 80%;
  }

  .buttons {
    display: flex;

    @include media(min, md) {
      flex-direction: row;
      justify-content: center;
      gap: 50px;
    }

    @include media(max, md) {
      flex-direction: column;
      gap: 20px;
      width: 80%;
    }
  }
}
</style>