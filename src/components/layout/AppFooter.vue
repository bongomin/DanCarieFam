<template>
  <q-footer class="bg-grey-9 text-white">
    <q-toolbar>
      <q-toolbar-title class="text-subtitle2">
        © {{ currentYear }} DanCarieFam. All rights reserved.
      </q-toolbar-title>
      <q-space />
      <q-btn-group flat>
        <q-btn flat dense label="Privacy Policy" />
        <q-btn flat dense label="Terms of Service" />
        <q-btn flat dense label="Contact Us" />
      </q-btn-group>
      <q-space />
      <div class="text-subtitle2">Version 1.0.0</div>
    </q-toolbar>
  </q-footer>
</template>

<script setup>
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
.q-footer {
  padding: 8px 16px;
}

.q-btn-group .q-btn {
  font-size: 0.8em;
}
</style>
