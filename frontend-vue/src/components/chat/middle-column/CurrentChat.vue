<template>
  <div
    class="hidden md:w-4/6 lg:w-4/6 bg-white h-full md:flex flex-col justify-start items-stretch border-r-2 border-l-2 border-gray-100 lg:rounded-r-md xl:rounded-none">
    <MessagesHeader />
    <Messages />
    <template v-if="isUserJoinSelectedChat">
      <ChatForm />
    </template>
    <template v-else>
      <ChatJoinForm />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Messages from './components/Messages.vue';
import MessagesHeader from './components/Header.vue';
import ChatForm from './components/ChatForm.vue';
import ChatJoinForm from './components/ChatJoinForm.vue';

export default defineComponent({
  name: "CurrentChat",
  computed: {
    isUserJoinSelectedChat () {
      return true;
    }
  },
  components: {
    Messages,
    MessagesHeader,
    ChatForm,
    ChatJoinForm
  }
});
</script>