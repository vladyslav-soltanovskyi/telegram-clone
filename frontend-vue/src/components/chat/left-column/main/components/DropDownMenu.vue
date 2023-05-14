<template>
  <div
    class="menu-container"
    ref="menuRef"
  >
    <button class="menu-btn" aria-label="Hamburger menu" @click="toggleMenu">
      <v-icon icon="fa-solid fa-bars" />
    </button>
    <ul
      class="menu"
      :class="menuClasses"
    >
      <li
        class="menu-item">
        <p class="mr-4 text-txt">
          <v-icon icon="fa-solid fa-floppy-disk" />
        </p>
        <p>Saved Messages</p>
      </li>
      <li
        class="menu-item">
        <p class="mr-4 text-txt">
          <v-icon icon="fa-solid fa-user" />
        </p>
        <p>Contacts</p>
      </li>
      <li
        class="menu-item">
        <p class="mr-4 text-txt">
          <v-icon icon="fa-solid fa-gear" />
        </p>
        <p>Settings</p>
      </li>
      <li
        class="menu-item">
        <p class="mr-4 text-txt">
          <v-icon icon="fa-solid fa-moon" />
        </p>
        <p>Night Mode</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import useClickOutSide from 'hooks/useClickOutSide';
import { reactive, ref, computed } from 'vue';

const state = reactive({ isShowMenu: false });
const menuRef = ref();

const menuClasses = computed(() => ({ active: state.isShowMenu }));

const toggleMenu = () => {
  state.isShowMenu = !state.isShowMenu;
}
const closeMenu = () => {
  state.isShowMenu = false;
}

useClickOutSide(menuRef, closeMenu);

</script>

<style scoped lang="scss">
.menu-container {
  @apply p-2 flex justify-center items-center text-gray-500 cursor-pointer relative;
}

.menu-btn {
  @apply flex flex-col justify-center items-center w-full p-2 rounded-lg active:bg-gray-100 hover:bg-opacity-30 focus:outline-none focus:ring;

  &-icon {
    @apply fill-current h-5 w-5;
  }
}

.menu {
  @apply hidden w-[270px] py-2 flex-col justify-around items-center absolute top-[55px] left-2 rounded-[15px] z-[3] shadow-gray-400 shadow-sm backdrop-blur-md;
  background-color: rgba(255, 255, 255, 0.74);
  &.active {
    @apply flex;
  }

  &-item {
    @apply w-[95%] h-[39px] pl-[15px] flex justify-start items-center text-[15px] text-gray-700 rounded-[7px] hover:bg-gray-200;
  }
}
</style>