<template>
  <div class="flex flex-col justify-center items-center my-4">
    <img
      src="https://t.aimg.sk/magaziny/Ts0fWXOKR12frPTjZ3a8UA~Prav-burger-dom-ca-buchta.png?t=LzB4MzU6NTg2eDM2NS85MjB4NzYwL3NtYXJ0L2ZpbHRlcnM6Zm9ybWF0KGpwZWcp&h=aSkfJNypYaRvL4kRNsFH8g&e=2145916800&v=5"
      class="w-32 h-32 mb-4 rounded-full" alt="">
    <h2 class="font-bold text-gray-700">
      Food porn group
    </h2>
  </div>
  <div class="my-6">
    <ul class="flex flex-row justify-center items-center">
      <li>
        <button
          type="button"
          class="profile-info-btn"
        >
          <v-icon
            icon="fa-solid fa-user-plus"
            class="h-6 w-6 mb-2 pl-2"
          />
          <p class="text-xs font-semibold">Add</p>
        </button>
      </li>
      <li>
        <button
          type="button"
          class="profile-info-btn"
        >
          <v-icon
            icon="fa-solid fa-bell-slash"
            class="h-6 w-6 mb-2"
          />
          <p class="text-xs font-semibold">Mute</p>
        </button>
      </li>
      <li>
        <button
          type="button"
          class="profile-info-btn"
        >
          <v-icon
            icon="fa-solid fa-arrow-right-from-bracket"
            class="h-6 w-6 mb-2"
          />
          <p class="text-xs font-semibold">Leave</p>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.profile-info-btn {
  @apply flex flex-col justify-center items-center p-2 m-2 w-16 h-16 text-gray-400 rounded-full hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring;
}
</style>