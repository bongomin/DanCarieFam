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

    <q-separator color="white"/>

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

    <q-item
      clickable
      v-ripple
      @click="handleLogout"
      class="text-white absolute-bottom q-mt-lg"
    >
      <q-item-section avatar>
        <q-icon name="logout" color="accent"/>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-weight-bold">Logout</q-item-label>
      </q-item-section>
    </q-item>
  </q-drawer>
</template>

<script setup>
import MenuListItem from "src/components/generics/MenuListItem.vue";
import UserProfileSection from "src/components/layout/UserProfileSection.vue";
import {useRouter} from "vue-router";

const router = useRouter();

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

const handleLogout = () => {
  localStorage.removeItem('authToken');
  router.push('/');
};
</script>
