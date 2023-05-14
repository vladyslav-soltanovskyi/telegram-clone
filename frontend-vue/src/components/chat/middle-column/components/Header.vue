<template>
  <div class="header-wrapper">
    <div>
      <h2 class="font-medium">Food porn group</h2>
      <p class="text-xs text-gray-500">4 memebres</p>
    </div>
    <div class="flex flex-row">
      <button
        type="button"
        class="header-btn"
        aria-label="Search"
      >
        <v-icon icon="fa-solid fa-magnifying-glass" />
      </button>
      <button
        type="button"
        class="header-btn reverse"
        aria-label="Open"
      >
        <v-icon icon="fa-solid fa-list-ul" />
      </button>
      <button
        type="button"
        class="header-btn"
        aria-label="More"
      >
        <v-icon icon="fa-solid fa-ellipsis-vertical" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.header-wrapper {
  @apply flex flex-row items-center justify-between px-3 py-2 bg-gray-50 bg-opacity-40 border-b-2 border-gray-100;
}

.header-btn {
  @apply flex justify-center items-center w-10 h-10 ml-2 text-gray-400 rounded-full hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring;

  &.active {
    @apply text-blue-500;
  }

  &.reverse {
    @apply rotate-180;
  }
}
</style>