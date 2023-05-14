<template>
  <li class="audio__item">
    <div class="audio__item-img">
      A
    </div>
    <div class="audio__item-info">
      <h2 class="audio__item-name">Benjamin Julien</h2>
      <p class="audio__item-description">
        asdfkl;j aslkfasd;fl k
      </p>
      <a href="#" class="audio__item-link">https://google.com</a>
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

.audio__item {
  @apply my-2 p-2 flex flex-row;

  &-info {
    @apply flex-1 flex flex-col justify-center;
  }

  &-name {
    @apply text-sm font-medium cursor-pointer hover:underline;
  }

  &-img {
    @apply w-11 h-11 mr-3 rounded-lg cursor-pointer bg-gray-800 flex justify-center items-center text-white uppercase;
  }

  &-description {
    @apply text-sm text-gray-500 mr-2 cursor-pointer hover:underline;
  }

  &-link {
    @apply text-sm text-blue-400 mr-2 hover:underline;
  }
}


</style>