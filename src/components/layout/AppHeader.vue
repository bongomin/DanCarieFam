<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <q-btn
        v-if="!$q.screen.lt.sm"
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="$emit('toggleDrawer')"
      />
      <q-avatar
        v-else
        size="42px"
        color="secondary"
        text-color="white"
        icon="person"
        class="q-mr-sm cursor-pointer"
        @click="$emit('toggleDrawer')"
      />

      <q-toolbar-title class="text-weight-bold">
        <span v-if="$q.screen.gt.xs">DanCarie Enterprises</span>
        <span v-else>DanCarieFam</span>
        <span class="text-subtitle2 q-ml-sm">Livestock Manager</span>
      </q-toolbar-title>

      <div v-if="$q.screen.gt.sm" class="text-subtitle2">v{{ appVersion }}</div>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";

const $q = useQuasar();
const appVersion = ref("1.0.0");

defineEmits(["toggleDrawer"]);
</script>
