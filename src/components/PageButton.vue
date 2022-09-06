<template>
  <button><slot /></button>
</template>

<style lang="scss" scoped>
@import "../assets/scss/placeholders";
@import "../assets/scss/vars";

button {
  display: inline-block;

  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;

  text-transform: uppercase;
  text-align: center;

  //padding-inline: 85px;
  min-width: 230px;
  padding-block: 17px;

  border-radius: 12px;

  &:hover {
    cursor: pointer;
  }

  &.font-bold {
    font-weight: 700;
  }

  &.filled-bronze {
    @extend %bg-bronze;

    color: #000;
  }

  &.outline-bronze {
    @extend %text-bronze;
    position: relative;

    &::before {
      content: '';

      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      border-radius: inherit;
      background: $bronze-gradient border-box;
      border: 2px solid transparent;
      -webkit-mask:
          linear-gradient(#fff 0 0) padding-box,
          linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
    }
  }

  &.white {
    border: 2px solid white;
    color: #fff !important;

    transition: background-color, color;
    transition-duration: .25s;

    &:hover {
      background-color: #fff;
      color: #000 !important;
    }
  }
}
</style>