<template>
  <div class="header__menu-item">
    <slot />
    <div class="underline__wrapper">
      <span class="underline" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/placeholders";

.header__menu-item {
  color: #fff;
  font-size: 24px;
  font-family: "KENOKY", sans-serif;

  position: relative;

  &:hover {
    cursor: pointer;
  }

  &.active, &:hover {
    .underline {
      opacity: 1 !important;
    }

    @extend %text-bronze;
  }

  .underline__wrapper {
    position: absolute;
    bottom: -5px;
    left: 0;

    width: 100%;

    display: grid;
    place-items: center;

    .underline {
      width: 80%;
      height: 1px;
      background-color: #BF6801;
      opacity: 0;
      transition-duration: .25s;
      transition-property: opacity;
    }
  }
}
</style>