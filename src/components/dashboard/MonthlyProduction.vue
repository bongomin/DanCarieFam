<template>
  <div class="col-12">
    <q-card>
      <q-card-section>
        <div class="text-h6">Monthly Production</div>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-8">
            <BarChart :chart-data="productionChartData" />
          </div>
          <div class="col-12 col-md-4">
            <q-list bordered separator>
              <q-item v-for="product in productionDetails" :key="product.name">
                <q-item-section avatar>
                  <q-icon :name="product.icon" color="primary" size="sm" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-subtitle2">{{
                    product.name
                  }}</q-item-label>
                  <q-item-label caption>
                    {{ product.amount }} {{ product.unit }}
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-chip
                    :color="product.trend === 'up' ? 'positive' : 'negative'"
                    text-color="white"
                    :icon="
                      product.trend === 'up' ? 'trending_up' : 'trending_down'
                    "
                    size="sm"
                  >
                    {{ product.percentage }}%
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
import BarChart from "components/charts/BarChart.vue";
import { useChartData } from "src/composables/useChartData";

const props = defineProps({
  productionDetails: {
    type: Array,
    required: true,
  },
});

const { monthlyProductionData } = useChartData();

const productionChartData = computed(() => ({
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Milk Production (L)",
      data: monthlyProductionData.value,
      backgroundColor: "#36A2EB",
    },
  ],
}));
</script>
