<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const { t } = useI18n();
</script>

<template>
  <section id="home-section-contacts">
    <PageContainer class="container">
      <SectionTitle
        :title="t('sections.contacts.title')"
        :caption="t('sections.contacts.caption')"
      />
      <div class="contacts-list">
        <span class="contact">+1-415-555-0173</span>
        <span class="contact">ohamid@uioct.com</span>
      </div>
      <span class="address">
        {{ t("sections.contacts.address") }}
      </span>
      <div class="socials">
        <a
          class="social-link"
          href="https://facebook.com"
        >
          <Icon
            class="icon"
            icon="gg:facebook"
          />
        </a>
        <a
          class="social-link"
          href="https://twitter.com"
        >
          <Icon
            class="icon"
            icon="mdi:twitter"
          />
        </a>
      </div>
    </PageContainer>
  </section>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/placeholders";

#home-section-contacts {
  padding-block: 40px;

  .container {
    gap: 40px;
  }

  text-align: center;

  .contacts-list {
    display: flex;
    flex-direction: column;

    span.contact {
      font-weight: 700;
      font-size: 32px;
      color: #F2F2F2;
    }
  }

  .address {
    font-weight: 400;
    font-size: 20px;
  }

  .socials {
    display: flex;
    flex-direction: row;
    gap: 20px;

    .social-link {
      @extend %bg-bronze;
      padding: 10px;

      display: grid;
      place-items: center;
      border-radius: 100%;

      .icon {
        font-size: 25px;
      }
    }
  }
}
</style>