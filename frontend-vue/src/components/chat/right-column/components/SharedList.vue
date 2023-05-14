<template>
  
  <template v-if="typeMedia === 'Media'">
    <ul class="grid grid-cols-3 gap-[0.0625rem] my-3">
      <template v-for="(attachemnt, index) in attachments" :key="index">
        <MediaItem />
      </template>
    </ul>
  </template>

  <template v-if="typeMedia === 'Members'">
    <template v-for="(attachemnt, index) in members" :key="index">
      <MemberItem />
    </template>
  </template>

  <template v-if="typeMedia === 'Links'">
    <template v-for="(attachemnt, index) in attachments" :key="index">
      <LinkItem />
    </template>
  </template>

  <template v-if="typeMedia === 'Files'">
    <template v-for="(attachemnt, index) in attachments" :key="index">
      <FileItem />
    </template>
  </template>

  <template v-if="typeMedia === 'Voice'">
    <template v-for="(attachemnt, index) in attachments" :key="index">
      <VoiceItem :is-show-full-date="true" />
    </template>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MemberItem from 'common/MemberItem.vue';
import MediaItem from './shared-media/MediaItem.vue';
import VoiceItem from 'common/AudioItem.vue';
import LinkItem from './shared-media/LinkItem.vue';
import FileItem from './shared-media/FileItem.vue';

export default defineComponent({
  props: {
    typeMedia: { type: String, default: 'media' },
    attachments: { type: Array, default: () => [1, 2, 3] },
    members: { type: Array, default: () => [1, 2, 3]},
  },
  components: {
    MemberItem,
    MediaItem,
    VoiceItem,
    LinkItem,
    FileItem
  }
});
</script>