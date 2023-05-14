<template>
  <div class="new-chat-btn-container">
    <button
      class="new-chat-btn"
      aria-label="Add">
      <svg class="new-chat-btn-icon" viewBox="0 0 25 25">
        <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
      </svg>
    </button>
  </div>
</template>

<style scoped lang="scss">
.new-chat-btn-container {
 @apply p-1 rounded-full text-gray-500;
}

.new-chat-btn {
  @apply flex flex-col justify-center items-center p-2 rounded-full focus:ring-2 hover:bg-gray-50 hover:bg-opacity-30 focus:outline-none;

  &-icon {
    @apply fill-current h-4 w-4;
  }
}
</style>