<template>
  <q-page class="q-pa-sm q-pa-md-md">
    <div class="row q-col-gutter-sm q-col-gutter-md-md">
      <SummaryCards :stats="summaryStats" />
      <LivestockDistribution :livestock-details="livestockDetails" />
      <RecentActivities :activities="recentActivities" />
      <MonthlyProduction :production-details="productionDetails" />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import SummaryCards from "components/dashboard/SummaryCards.vue";
import LivestockDistribution from "components/dashboard/LivestockDistribution.vue";
import RecentActivities from "components/dashboard/RecentActivities.vue";
import MonthlyProduction from "components/dashboard/MonthlyProduction.vue";
import {
  summaryStats,
  livestockDetails,
  recentActivities,
  productionDetails,
} from "src/data/dashboardData";

const summaryStatsRef = ref(summaryStats);
const livestockDetailsRef = ref(livestockDetails);
const recentActivitiesRef = ref(recentActivities);
const productionDetailsRef = ref(productionDetails);
</script>

<style scoped>
@media (max-width: 599px) {
  .text-h6 {
    font-size: 1rem;
  }
  .text-subtitle2 {
    font-size: 0.875rem;
  }
}
</style>
