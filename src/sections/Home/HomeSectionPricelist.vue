<script lang="ts" setup>
import priceListDataSv from "../../assets/price-lists/price-list.sv.json";
import priceListDataEn from "../../assets/price-lists/price-list.en.json";

const { t, locale } = useI18n();

let priceListData = ref([] as any[]);

onMounted(() => {
  priceListData.value = locale.value == "sv" ? priceListDataSv : priceListDataEn;
});
</script>

<template>
  <section id="home-section-price-list">
    <PageContainer>
      <SectionTitle :title="t('sections.price-list.title')" />
      <div
        v-if="priceListData.length > 0"
        class="price-list"
      >
        <div class="price-list-groups-wrapper">
          <div class="left">
            <PriceListGroup
              :title="priceListData[0].title"
              :items="priceListData[0].items"
            />
            <PriceListGroup
              :title="priceListData[1].title"
              :items="priceListData[1].items"
            />
          </div>
          <div class="right">
            <PriceListGroup
              :title="priceListData[2].title"
              :items="priceListData[2].items"
            />
          </div>
        </div>
        <div class="price-list-groups-wrapper">
          <div class="left">
            <PriceListGroup
              :title="priceListData[3].title"
              :items="priceListData[3].items"
            />
          </div>
          <div class="right">
            <PriceListGroup
              :title="priceListData[4].title"
              :items="priceListData[4].items"
            />
            <PriceListGroup
              :title="priceListData[5].title"
              :items="priceListData[5].items"
            />
          </div>
        </div>
        <div class="price-list-groups-wrapper">
          <div class="left">
            <PriceListGroup
              :title="priceListData[6].title"
              :items="priceListData[6].items"
            />
            <PriceListGroup
              :title="priceListData[7].title"
              :items="priceListData[7].items"
            />
            <PriceListGroup
              :title="priceListData[8].title"
              :items="priceListData[8].items"
            />
            <PriceListGroup
              :title="priceListData[9].title"
              :items="priceListData[9].items"
            />
          </div>
          <div class="right">
            <PriceListGroup
              :title="priceListData[10].title"
              :items="priceListData[10].items"
            />
            <PriceListGroup
              :title="priceListData[11].title"
              :items="priceListData[11].items"
            />
            <PriceListGroup
              :title="priceListData[12].title"
              :items="priceListData[12].items"
            />
            <PriceListGroup
              :title="priceListData[13].title"
              :items="priceListData[13].items"
            />
          </div>
        </div>
      </div>
    </PageContainer>
  </section>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/mixins";

#home-section-price-list {
  padding-block-start: 50px;

  .price-list {
    display: flex;
    flex-direction: column;

    gap: 50px;
    padding-block: 80px;

    width: 100%;

    @include media(max, lg) {
      width: 90%;
    }

    .price-list-groups-wrapper {
      width: 100%;

      display: grid;

      @include media(min, lg) {
        grid-template-columns: 1fr 1fr;
      }

      @include media(max, lg) {
        grid-template-rows: auto auto;
      }

      gap: 50px;

      .left, .right {
        display: flex;
        flex-direction: column;

        gap: 50px;
      }
    }
  }
}
</style>