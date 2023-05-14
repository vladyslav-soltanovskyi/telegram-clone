<template>
  <li class="file__item">
    <div class="file__item-img">
      <span class="file__item-img-ext">docx</span>
      <v-icon icon="fa-solid fa-download" class="file__item-img-icon" />
    </div>
    <div class="file__item-info">
      <h2 class="file__item-name">Benjamin Julien</h2>
      <p class="file__item-description">
        asdfkl;j aslkfasd;fl k
      </p>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    isShowFullDate: { type: Boolean, default: false }
  }
});
</script>

<style scoped lang="scss">
audio {
  display: none;
}

.file__item {
  @apply my-2 p-2 flex flex-row;

  &-info {
    @apply flex-1 flex flex-col justify-center;
  }

  &-name {
    @apply text-sm font-medium;
  }

  &-img {
    @apply w-11 h-11 mr-3 rounded-lg cursor-pointer bg-blue-500 flex justify-center items-center text-white;

    &-icon {
      @apply text-white hidden;
    }

    &:hover &-ext {
      @apply hidden;
    }

    &:hover &-icon {
      @apply flex;
    }
  }

  &-description {
    @apply text-sm text-gray-500 mr-2;
  }

  &-link {
    @apply text-sm text-blue-400 mr-2;
  }
}


</style>