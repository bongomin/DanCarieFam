<template>
  <div v-for="stat in stats" :key="stat.title" class="col-6 col-sm-6 col-md-3">
    <q-card class="dashboard-card">
      <q-card-section>
        <div class="text-subtitle2 text-md-h6">{{ stat.title }}</div>
        <div class="text-h6 text-md-h4 q-mt-sm q-mt-md-md text-weight-bold">
          {{ stat.value }}
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
defineProps({
  stats: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.dashboard-card {
  height: 100%;
}
</style>
