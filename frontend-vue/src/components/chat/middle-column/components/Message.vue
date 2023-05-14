<template>
  <div class="chat-message" :class="messageClasses">
    <template v-if="isShowAvatar">
      <div class="user-avatar">
        <img
          src="https://www.statnews.com/wp-content/uploads/2018/01/AdobeStock_107381486-645x645.jpeg"
          alt=""
        >
      </div>
    </template>
    <div class="message-block">
      <template v-if="isShowName">
        <h2 class="user-name">Yaeko Lindblom</h2>
      </template>
      <p class="message-text">
        There are many variations of passages of Lorem Ipsum
      </p>
      <div class="message-date">
        <span class="mr-1">
          10:46
        </span>
        <!-- <svg class="w-4 h-4 fill-current" viewBox="0 0 19 14">
          <path fill-rule="nonzero"
            d="M4.96833846,10.0490996 L11.5108251,2.571972 C11.7472185,2.30180819 12.1578642,2.27443181 12.428028,2.51082515 C12.6711754,2.72357915 12.717665,3.07747757 12.5522007,3.34307913 L12.4891749,3.428028 L5.48917485,11.428028 C5.2663359,11.6827011 4.89144111,11.7199091 4.62486888,11.5309823 L4.54038059,11.4596194 L1.54038059,8.45961941 C1.2865398,8.20577862 1.2865398,7.79422138 1.54038059,7.54038059 C1.7688373,7.31192388 2.12504434,7.28907821 2.37905111,7.47184358 L2.45961941,7.54038059 L4.96833846,10.0490996 L11.5108251,2.571972 L4.96833846,10.0490996 Z M9.96833846,10.0490996 L16.5108251,2.571972 C16.7472185,2.30180819 17.1578642,2.27443181 17.428028,2.51082515 C17.6711754,2.72357915 17.717665,3.07747757 17.5522007,3.34307913 L17.4891749,3.428028 L10.4891749,11.428028 C10.2663359,11.6827011 9.89144111,11.7199091 9.62486888,11.5309823 L9.54038059,11.4596194 L8.54038059,10.4596194 C8.2865398,10.2057786 8.2865398,9.79422138 8.54038059,9.54038059 C8.7688373,9.31192388 9.12504434,9.28907821 9.37905111,9.47184358 L9.45961941,9.54038059 L9.96833846,10.0490996 L16.5108251,2.571972 L9.96833846,10.0490996 Z">
          </path>
        </svg> -->
        <v-icon icon="fa-solid fa-check" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  isCurrentUserMsg?: Boolean,
  isShowAvatar?: Boolean
  message?: string,
  isShowName?: Boolean
}>();

const messageClasses = computed(() => ({
  'current-user-msg': props.isCurrentUserMsg
}));
// export default {
//   name: 'ChatMessage',
//   props: {
//     msg: {
//       type: Object,
//       required: true,
//     },
//     isCurrentUserMsg: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   computed: {
//     messageClasses() {
//       return {
//         'current-user-msg': this.isCurrentUserMsg,
//       };
//     },
//     userName() {
//       return `${this.msg.user.firstName} ${this.msg.user.lastName}`;
//     },
//   },
// };
</script>

<style scoped lang="scss">
.message-block {
  @apply bg-gray-50 p-3 pb-5 rounded-xl ml-2 mb-2 relative;
}

.message-date {
  @apply flex items-center text-xs text-gray-500 absolute right-1 bottom-1;
}

.chat-message {
  @apply flex flex-row p-2 w-[92%];

  &.current-user-msg {
    @apply ml-auto justify-end;

    .message-block {
      @apply px-4 py-3 pb-5 ml-2 my-2 bg-blue-500 text-white flex flex-row items-center;
    }

    .message-date {
      @apply text-white;
    }
  }
}

.user-avatar {
  @apply w-1/12 py-2 flex;

  img {
    @apply h-12 w-12 rounded-full self-end;
  }
}

.user-name {
  @apply text-sm font-semibold mb-2;
}

.message-text {
  @apply text-sm flex;
}


</style>
