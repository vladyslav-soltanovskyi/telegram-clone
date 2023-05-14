<template>
  <div class="chats-list">
    <template v-for="(chat, index) in [1, 2, 3]">
      <ChatItem :is-chat-item="true" />
    </template>
  </div>
</template>

<script lang="ts">
import ChatItem from 'common/MemberItem.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    ChatItem
  }
});
</script>

<style lang="scss" scoped>
.chats-list {
  @apply w-full p-1 overflow-y-auto;
}
</style>
