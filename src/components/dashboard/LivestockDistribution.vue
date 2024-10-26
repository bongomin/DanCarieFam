<template>
  <div class="col-12 col-lg-8">
    <q-card>
      <q-card-section>
        <div class="text-h6">Livestock Distribution</div>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6">
            <PieChart :chart-data="livestockChartData" />
          </div>
          <div class="col-12 col-md-6">
            <q-list>
              <q-item v-for="animal in livestockDetails" :key="animal.type">
                <q-item-section avatar>
                  <q-icon :name="animal.icon" color="primary" size="sm" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-subtitle2">{{
                    animal.type
                  }}</q-item-label>
                  <q-item-label caption>
                    Count: {{ animal.count }} | {{ animal.percentage }}%
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-chip
                    :color="animal.chipColor"
                    text-color="white"
                    size="sm"
                  >
                    {{ animal.status }}
                  </q-chip>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { computed } from "vue";
import PieChart from "components/charts/PieChart.vue";

const props = defineProps({
  livestockDetails: {
    type: Array,
    required: true,
  },
});

const livestockChartData = computed(() => ({
  labels: props.livestockDetails.map((item) => item.type),
  datasets: [
    {
      data: props.livestockDetails.map((item) => item.count),
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
    },
  ],
}));
</script>
