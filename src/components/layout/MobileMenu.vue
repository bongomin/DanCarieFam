<template>
  <q-footer elevated class="bg-primary text-white">
    <q-tabs
      no-caps
      active-color="secondary"
      indicator-color="secondary"
      class="text-white"
    >
      <q-route-tab
        v-for="item in menuItems"
        :key="item.title"
        :to="item.link"
        :icon="item.icon"
        :label="item.title"
      />
    </q-tabs>
  </q-footer>
</template>

<script setup>
defineProps({
  menuItems: {
    type: Array,
    required: true,
  },
});
</script>
