<template>
  <div class="search">
    <input type="text" placeholder="Search" class="search-input">
  </div>
</template>

<style lang="scss" scoped>
.search {
  @apply w-full p-1;

  &-input {
    @apply bg-gray-600 bg-opacity-10 placeholder-gray-500 text-gray-800 text-sm py-1 px-10 rounded-md outline-none w-full focus:outline-none focus:ring;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' d='M18.109,17.776l-3.082-3.081c-0.059-0.059-0.135-0.077-0.211-0.087c1.373-1.38,2.221-3.28,2.221-5.379c0-4.212-3.414-7.626-7.625-7.626c-4.212,0-7.626,3.414-7.626,7.626s3.414,7.627,7.626,7.627c1.918,0,3.665-0.713,5.004-1.882c0.006,0.085,0.033,0.17,0.098,0.234l3.082,3.081c0.143,0.142,0.371,0.142,0.514,0C18.25,18.148,18.25,17.918,18.109,17.776zM9.412,16.13c-3.811,0-6.9-3.089-6.9-6.9c0-3.81,3.089-6.899,6.9-6.899c3.811,0,6.901,3.09,6.901,6.899C16.312,13.041,13.223,16.13,9.412,16.13z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: left 0.75rem center;
    background-size: 0.9rem 1.25rem;
  }
}
</style>