<script lang="ts" setup>
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/dist/photoswipe.css";

let lightbox: PhotoSwipeLightbox;

const createGallery = () => {
  lightbox = new PhotoSwipeLightbox({
    gallery: "#gallery",
    children: "a",
    pswpModule: () => import("photoswipe")
  });
  lightbox.init();
};

type ImageData = {
  src: string,
  width: number,
  height: number
};

const imagesData = reactive({ value: [] as ImageData[] });

const processImage = (imageUrl: string): Promise<ImageData> => {
  return new Promise<ImageData>((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      resolve({
        src: imageUrl,
        width: image.width,
        height: image.height
      });
    };
    image.src = imageUrl;
  });
};

const processImages = async (images: string[]): Promise<ImageData[]> => {
  const imageDatas: ImageData[] = [];

  for(const imageUrl of images) {
    const imageData = await processImage(imageUrl);
    imageDatas.push(imageData);
  }

  return imageDatas;
};

onMounted(async () => {
  imagesData.value = await processImages(props.images);

  createGallery();
});

const props = defineProps<{
  images: string[]
}>();
</script>

<template>
  <PagePopup id="gallery-popup">
    <div
      id="gallery"
      class="gallery"
    >
      <a
        v-for="(imageData, key) of imagesData.value"
        :key="key"
        :href="imageData.src"
        :data-pswp-width="imageData.width"
        :data-pswp-height="imageData.height"
        target="_blank"
        rel="noreferrer"
      >
        <img
          :src="imageData.src"
          :alt="imageData.src"
        >
      </a>
    </div>
  </PagePopup>
</template>

<style lang="scss" scoped>
@import "../assets/scss/mixins";

#gallery {
  align-self: start;

  width: 90%;
  max-height: 100%;

  display: grid;

  @include media(min, lg) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
  }

  @include media(max, lg) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }

  @include media(max, md) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  gap: 10px;
  overflow-y: scroll;

  a {
    width: 100%;
    height: 200px;
  }

  a > img {
    width: 100%;
    height: 100%;

    border-radius: 10px;
    object-fit: cover;
  }
}
</style>