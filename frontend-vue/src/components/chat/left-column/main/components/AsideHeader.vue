<template>
  <div class="header">
    <MenuDropDown />
    <NewChatButton />
  </div>
</template>

<script setup lang="ts">
import MenuDropDown from './DropDownMenu.vue';
import NewChatButton from './NewChatButton.vue';
</script>

<style lang="scss" scoped>
.header {
  @apply flex items-center justify-between mb-4;
}
</style>