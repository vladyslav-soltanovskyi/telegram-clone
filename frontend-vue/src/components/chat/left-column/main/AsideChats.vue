<template>
  <div class="aside">
    <AsideHeader />
    <SearchInput />
    <ChatsList />
  </div>
</template>

<script lang="ts">
import ChatsList from './components/ChatsList.vue';
import SearchInput from './components/SearchInput.vue';
import AsideHeader from './components/AsideHeader.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    ChatsList,
    SearchInput,
    AsideHeader
  }
});
</script>

<style scoped lang="scss">
.aside {
  @apply w-full md:w-2/6 lg:w-2/6 xl:w-2/6 flex flex-col justify-start items-stretch  bg-white bg-opacity-80 rounded-md lg:rounded-none lg:rounded-l-md p-3;
}
</style>
