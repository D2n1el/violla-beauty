<script lang="ts" setup>
import { useDialogControls } from "~/composables/popup";
import { Icon } from "@iconify/vue";

const props = defineProps<{
  id: string
}>();

let controls = useDialogControls(props.id);

onMounted(() => {
  controls = useDialogControls(props.id);
});

const onOutsideFormButtonClick = () => {
  controls.close();
};
</script>

<template>
  <button
    :id="id"
    class="dialog__container"
  >
    <div
      class="dialog"
    >
      <slot />
    </div>
    <div
      class="dialog-background"
      @click="onOutsideFormButtonClick"
    />
    <button
      class="close-button"
      @click="controls.close()"
    >
      <Icon
        class="icon"
        icon="ic:baseline-close"
      />
    </button>
  </button>
</template>

<style lang="scss" scoped>
.dialog__container {
  position: fixed;
  top: 0;
  left: 0;

  display: grid;
  place-items: center;

  opacity: 0;

  transition-property: opacity;
  transition-duration: .5s;

  width: 100vw;
  height: 100vh;

  z-index: -100;

  .dialog {
    z-index: 101;
    position: relative;

    width: 90%;
    height: 80vh;

    display: grid;
    place-items: center;
  }

  .dialog-background {
    position: fixed;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    z-index: 10;

    background: rgba(0, 0, 0, 0.7);
  }

  &.show {
    opacity: 100%;
  }

  .close-button {
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 200;

    .icon {
      font-size: 30px;
    }
  }
}
</style>
