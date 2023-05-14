<template>
  <div class="chat">
    <LeftColumn />
    <MiddleColumn />
    <RightColumn />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LeftColumn from './left-column/main/AsideChats.vue';
import MiddleColumn from './middle-column/CurrentChat.vue';
import RightColumn from './right-column/RightColumn.vue';

export default defineComponent({
  name: 'Chat',
  components: {
    LeftColumn,
    MiddleColumn,
    RightColumn
  }
});
</script>

<style scoped>
.chat {
  height: 100vh;
  @apply shadow-xl rounded-md w-full lg:mx-auto flex relative;
}
</style>