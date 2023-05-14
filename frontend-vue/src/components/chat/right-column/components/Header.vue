<template>
  <header class="flex flex-row justify-end items-center">
    <button
      type="button"
      class="profile-header-btn"
    >
      <v-icon icon="fa-solid fa-xmark" class="h-6 w-6" />
    </button>
  </header>
</template>

<style scoped lang="scss">
.profile-header-btn {
  @apply flex justify-center items-center p-2 ml-2 text-gray-400 rounded-full hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring;
}
</style>