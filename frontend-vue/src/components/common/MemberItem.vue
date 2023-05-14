<template>
  <li class="member-item">
    <img
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-997145684-1547233351.jpg?crop=1xw:1xh;center,top&resize=480:*"
      class="member-item-avatar" alt="">
    <div class="member-item-info-container">
      <div class="member-item-info">
        <h2 class="member-name">Benjamin Julien</h2>
        <template v-if="isChatItem">
          <div class="member-item-last-msg-meta">
            <v-icon icon="fal-light fa-check-double" class="text-[12px] text-blue-500" />
            <span class="member-update-time">
              10:45
            </span>
          </div>
        </template>
      </div>
      <div class="member-item-last-msg-container">
        <template v-if="isChatItem">
          <p class="member-item-last-msg">On projection apartments unsatiable...</p>
          <span class="new-message">4</span>
        </template>
        <template v-else>
          <!-- <p class="text-xs text-gray-400 font-normal">last seen recently</p> -->
          <p class="text-xs text-blue-600 font-normal">Online</p>
        </template>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    isChatItem: { type: Boolean, default: false }
  }
});
</script>

<style scoped lang="scss">
.member-item {
  @apply my-2 p-2 flex flex-row cursor-pointer rounded-lg hover:bg-gray-200 hover:bg-opacity-50;

  &.active {
    @apply bg-blue-500 hover:bg-blue-500;
  }
}

.member-item-avatar {
  @apply w-12 h-12 mr-4 rounded-full;
}

.new-message {
  @apply text-sm bg-blue-500 rounded-full text-center text-white font-bold px-2;
}

.member-item-info-container {
  @apply w-full flex flex-col justify-center;
}

.member-item-info {
  @apply flex flex-row justify-between items-center;
}

.member-name {
  @apply text-xs font-bold;
}

.member-update-time {
  @apply text-gray-400;
}

.member-item-last-msg-container {
  @apply flex flex-row justify-between items-center;
}

.member-item-last-msg {
  @apply text-xs text-gray-500;
}

.member-item-last-msg-meta {
  @apply text-xs flex flex-row;
}
</style>
