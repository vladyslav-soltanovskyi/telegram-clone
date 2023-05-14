<template>
  <div class="chat-form">
    <div>
      <button
        type="button"
        class="chat-form-btn"
        aria-label="Upload a files"
      >
        <v-icon icon="fa-solid fa-paperclip" class="chat-form-icon" />
      </button>
    </div>
    <div class="flex-1 px-3">
      <input
        class="chat-input"
        placeholder="Write a message...">
    </div>
    <div class="flex flex-row">
      <button
        type="button"
        class="chat-form-btn"
        aria-label="Show emojis"
      >
        <v-icon icon="fa-regular fa-face-smile" class="chat-form-icon" />
      </button>
      <button
        type="button"
        class="chat-form-btn ml-2"
        aria-label="Record a voice"
      >
      <v-icon icon="fa-solid fa-microphone" class="chat-form-icon" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat-form {
  @apply flex flex-row justify-between items-center p-3
}

.chat-form-btn {
  @apply p-2 text-gray-400 rounded-full hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring;
}

.chat-input {
  @apply w-full border-2 border-gray-100 rounded-full px-4 py-1 outline-none text-gray-500 focus:outline-none focus:ring;
}

.chat-form-icon {
  @apply h-6 w-6;
}
</style>