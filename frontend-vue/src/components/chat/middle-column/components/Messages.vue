<template>
  <div class="chat-messages-wrap">
    <template v-if="![1].length">
      <!-- <NoChatMessages /> -->
      <div>NoChatMessages</div>
    </template>
    <template v-else>
      <template v-for="(msg, index) in [0, 2, 3]" :key="index">
        <Message
          :msg="msg"
          :is-current-user-msg="!!msg"
        />
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Message from './Message.vue';


export default defineComponent({
  components: {
    Message,
  }
})
// defineProps<{ messages?: number[] }>();

// export default {
//   name: 'ChatMessages',
//   props: {
//     messages: {
//       type: Array,
//       default: () => [],
//     },
//     currentUserId: {
//       type: String,
//       required: true,
//     },
//     isTyping: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   components: {
//     ChatMessage,
//     NoChatMessages,
//     TypingLoader,
//   },
//   directives: {
//     scrollDown: {
//       componentUpdated(el, binding) {
//         if (binding.value === 0) return;
//         // eslint-disable-next-line no-param-reassign
//         el.scrollTop = el.scrollHeight;
//       },
//     },
//   },
// };
</script>

<style scoped>
.chat-messages-wrap {
  @apply flex-auto flex flex-col overflow-y-auto;
}
</style>
