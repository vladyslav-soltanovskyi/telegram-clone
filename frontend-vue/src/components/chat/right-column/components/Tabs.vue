<template>
  <ul class="tabs">
    <template v-for="(tab, index) in tabs" :key="tab">
      <li
        class="tab"
        :class="tabClasses(tab)"
        @click="toggleTab(tab)"
      >{{ tab }}</li>
    </template>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  data: () => ({
    tabs: ['Members', 'Media', 'Links', 'Files', 'Voice'],
    selectedTab: 'Media'
  }),
  emits: ['toggleTab'],
  methods: {
    tabClasses(currentTab: string) {
      return { active: this.selectedTab === currentTab }
    },
    toggleTab(selectTab: string) {
      this.selectedTab = selectTab;
      this.$emit('toggleTab', selectTab);
    }
  }
});
</script>

<style scoped lang="scss">
.tabs {
  @apply flex flex-row justify-between items-center bg-gray-200 rounded-lg p-1 overflow-x-auto;
}

.tab {
  @apply text-xs text-gray-600 font-semibold px-3 py-1 cursor-pointer;

  &.active {
    @apply rounded-md bg-white text-black;
  }
}
</style>