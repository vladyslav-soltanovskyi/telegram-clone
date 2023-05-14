<template>
  <li class="audio__item">
    <div class="audio__item-btn" @click="togglePlay">
      <template v-if="!isPlaying">
        <v-icon icon="fa-solid fa-play" />
      </template>
      <template v-else>
        <v-icon icon="fa-solid fa-stop" />
      </template>
    </div>
    <div class="audio__item-info-container">
      <div class="audio__item-info">
        <h2 class="audio__item-name">Benjamin Julien</h2>
        <span class="audio__item-time">
          10:45
        </span>
      </div>
      <div class="audio__item-control">
        <p class="audio__item-duration">33:33</p>
        <div class="audio__item-progress">
          <div class="audio__item-progress-bar"></div>
        </div>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => ({
    isPlaying: false
  }),
  methods: {
    togglePlay() {
      this.isPlaying = !this.isPlaying;
    }
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
    @apply flex flex-row justify-between items-center;

    &-container {
      @apply flex-1 flex flex-col justify-center;
    }
  }
  
  &-time {
    @apply text-sm text-gray-400;
  }

  &-btn {
    @apply w-11 h-11 mr-3 rounded-full cursor-pointer bg-blue-400 flex justify-center items-center text-white;
  }

  &-name {
    @apply text-sm font-medium;
  }

  &-duration {
    @apply text-sm text-gray-500 mr-2;
  }
  
  &-control {
    @apply flex items-center;
  }

  &-progress {
    @apply h-[4px] w-full bg-gray-200 relative cursor-pointer;
    
    &-bar {
      @apply absolute h-full bg-blue-500 w-3;
    }
  }
}


</style>