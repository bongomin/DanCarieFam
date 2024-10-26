<template>
  <q-drawer
    :model-value="isOpen"
    @update:model-value="$emit('update:isOpen', $event)"
    show-if-above
    bordered
    class="bg-secondary"
  >
    <UserProfileSection
      userName="Bongomin Daniel"
      userEmail="bongomindaniel@gmail.com"
    />

    <q-separator color="white" />

    <q-list>
      <MenuListItem
        v-for="link in links"
        :key="link.title"
        v-bind="link"
        :clickable="true"
        tag="a"
        target="_self"
        text-color="text-white"
        icon-color="accent"
        title-class="text-weight-bold"
        caption-class="text-white-8"
      />
    </q-list>
  </q-drawer>
</template>

<script setup>
import MenuListItem from "src/components/generics/MenuListItem.vue";
import UserProfileSection from "src/components/layout/UserProfileSection.vue";

defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  links: {
    type: Array,
    required: true,
  },
});

defineEmits(["update:isOpen"]);
</script>
