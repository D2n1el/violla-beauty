<script lang="ts" setup>
const { t } = useI18n();
</script>

<template>
  <section id="home-section-team">
    <PageContainer clas="container">
      <SectionTitle
        :title="t('sections.team.title')"
        :caption="t('sections.team.caption')"
      />
      <p class="description">
        {{ t("sections.team.text") }}
      </p>
      <div class="employees">
        <TeamEmployeeBadge
          :name="t('sections.team.employees[0].name')"
          :position="t('sections.team.employees[0].position')"
          :caption="t('sections.team.employees[0].caption')"
          image-url="/assets/images/employees/jessica.png"
        />
        <TeamEmployeeBadge
          :name="t('sections.team.employees[1].name')"
          :position="t('sections.team.employees[1].position')"
          :caption="t('sections.team.employees[1].caption')"
          image-url="/assets/images/employees/jessica.png"
        />
      </div>
    </PageContainer>
  </section>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/mixins";

#home-section-team {
  padding-block: 50px;

  .container {
    gap: 70px;

    @include media(max, md) {
      gap: 40px;
    }
  }

  p.description {
    font-family: "Jost", sans-serif;
    font-size: 18px;
    font-weight: 300;
    text-align: center;
    width: 80%;

    @include media(max, md) {
      width: 90%;
    }
  }

  .employees {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @include media(max, md) {
      width: 90%;
      gap: 100px;
    }
  }
}
</style>