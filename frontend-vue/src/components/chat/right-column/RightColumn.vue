<template>
  <div class="hidden w-2/6 xl:block bg-white rounded-r-md p-5 overflow-y-auto">
    <RightHeader />
    <main>
      <ProfileInfo />
      
      <div class="">
        <Tabs @toggle-tab="onToggleTab" />
        <SharedList :type-media="typeMedia" />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RightHeader from './components/Header.vue';
import ProfileInfo from './components/ProfileInfo.vue';
import Tabs from './components/Tabs.vue';
import SharedList from './components/SharedList.vue';

export default defineComponent({
  data: () => ({
    typeMedia: 'Media'
  }),
  methods: {
    onToggleTab(selectedTab: string) {
      this.typeMedia = selectedTab;
    },
  },
  components: {
    RightHeader,
    ProfileInfo,
    Tabs,
    SharedList
  }
});
</script>