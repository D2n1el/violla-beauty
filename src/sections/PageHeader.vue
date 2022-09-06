<script lang="ts" setup>
import Logo from "../components/svg/Logo.vue";
import { useScrollToElementById } from "~/composables/scroll-to-element";

const { t } = useI18n();

const scrollToGallery = useScrollToElementById("home-section-gallery");
const scrollToPriceList = useScrollToElementById("home-section-price-list");
const scrollToTeam = useScrollToElementById("home-section-team");
const scrollToContacts = useScrollToElementById("home-section-contacts");
</script>

<template>
  <header>
    <PageContainer class="header__container">
      <Logo class="header-logo" />
      <div class="header__menu">
        <HeaderMenuItem class="active">
          {{ t("header.menu.violla-beauty") }}
        </HeaderMenuItem>
        <HeaderMenuItem @click="scrollToPriceList">
          {{ t("header.menu.price-list") }}
        </HeaderMenuItem>
        <HeaderMenuItem @click="scrollToGallery">
          {{ t("header.menu.portfolio") }}
        </HeaderMenuItem>
        <HeaderMenuItem @click="scrollToTeam">
          {{ t("header.menu.team") }}
        </HeaderMenuItem>
        <HeaderMenuItem @click="scrollToContacts">
          {{ t("header.menu.make-an-appointment") }}
        </HeaderMenuItem>
        <LanguageSwitcher />
      </div>
    </PageContainer>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/scss/mixins";

header {
  padding: 50px 0;
}

.header__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}

.header-logo {
  @include media(max, lg) {
    width: 90%;
  }

  @include media(min, lg) {
    width: 595px;
    height: 325px;
  }
}

.header__menu {
  @include media(max, lg) {
    display: none;
  }

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
}
</style>