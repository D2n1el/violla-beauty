<script lang="ts" setup>
import { useDialogControls } from "~/composables/popup";

const galleryPopupControls = useDialogControls("gallery-popup");

const images = [
  "/assets/images/gallery/1.jpg",
  "/assets/images/gallery/2.jpg",
  "/assets/images/gallery/3.jpg",
  "/assets/images/gallery/4.jpg",
  "/assets/images/gallery/5.jpg",
];
</script>

<template>
  <GalleryPopup :images="images" />
  <section id="home-section-gallery">
    <PageContainer class="container">
      <div class="title">
        <h2>Gallery</h2>
        <span>Beauty saloon</span>
      </div>
      <div class="gallery">
        <img
          src="/assets/images/gallery/1.jpg"
          alt="Gallery image 1"
        >
        <img
          src="/assets/images/gallery/2.jpg"
          alt="Gallery image 2"
        >
        <img
          src="/assets/images/gallery/3.jpg"
          alt="Gallery image 3"
        >
        <img
          src="/assets/images/gallery/4.jpg"
          alt="Gallery image 4"
        >
        <img
          src="/assets/images/gallery/5.jpg"
          alt="Gallery image 5"
        >
      </div>
      <PageButton
        class="white"
        @click="galleryPopupControls.open()"
      >
        See more
      </PageButton>
    </PageContainer>
  </section>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/vars";
@import "../../assets/scss/mixins";

#home-section-gallery {
  background-image:
      url("../../assets/images/gallery-bg.svg"),
      $bronze-gradient;
  background-size: cover;
  background-position: center;

  padding-block: 50px;

  .container {
    display: flex;
    flex-direction: column;

    gap: 30px;

    align-items: center;
    text-align: center;

    h2 {
      font-size: 48px;
      color: #000;
    }

    span {
      font-family: "Jost", sans-serif;
      font-size: 16px;
      font-weight: 300;
      color: #3C3C3C;
    }

    .gallery {
      display: grid;

      @include media(min, md) {
        grid-template-columns: 1fr 0.5fr 0.5fr;
        grid-template-rows: 1fr 1fr;
      }

      @include media(max, md) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 2fr 1fr 1fr;
        width: 95%;
      }

      gap: 20px;

      img {
        border-radius: 16px;
        object-fit: cover;

        width: 100%;
        height: 100%;
      }

      img:nth-child(1) {
        aspect-ratio: 1;

        @include media(min, md) {
          grid-row: 1 / 3;
          grid-column: 1;
        }

        @include media(max, md) {
          grid-row: 1;
          grid-column: 1 / 3;
        }
      }
    }
  }
}
</style>