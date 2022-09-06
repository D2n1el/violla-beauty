<script lang="ts" setup>
import HomeSectionMain from "../sections/Home/HomeSectionMain.vue";
import HomeSectionGallery from "~/sections/Home/HomeSectionGallery.vue";
import HomeSectionPricelist from "~/sections/Home/HomeSectionPricelist.vue";
import HomeSectionTeam from "~/sections/Home/HomeSectionTeam.vue";
import HomeSectionContacts from "~/sections/Home/HomeSectionContacts.vue";

const route = useRoute();
const router = useRouter();

const { t, locale, availableLocales }= useI18n();

useHead({
  title: t("head.title"),
  meta: [
    {
      name: "description",
      content: t("head.description"),
    },
    {
      name: "keywords",
      content: t("head.keywords"),
    },
  ],
});

onBeforeMount(() => {
  if(
    route.params.localeName &&
      !Array.isArray(route.params.localeName) &&
      !!availableLocales.find(x => x == route.params.localeName)) {
    locale.value = route.params.localeName;
  } else router.push("/sv");
});
</script>

<template>
  <HomeSectionMain />
  <HomeSectionGallery />
  <HomeSectionPricelist />
  <HomeSectionTeam />
  <HomeSectionContacts />
</template>

<style lang="scss" scoped>

</style>