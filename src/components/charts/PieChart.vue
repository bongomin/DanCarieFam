<template>
  <q-responsive :ratio="1">
    <canvas ref="chartRef"></canvas>
  </q-responsive>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import {
  Chart,
  PieController,
  ArcElement,
  Legend,
  Title,
  Tooltip,
} from "chart.js";

Chart.register(PieController, ArcElement, Legend, Title, Tooltip);

const props = defineProps({
  chartData: {
    type: Object,
    required: true,
  },
});

const chartRef = ref(null);
let chart = null;

const createChart = () => {
  const ctx = chartRef.value.getContext("2d");
  chart = new Chart(ctx, {
    type: "pie",
    data: props.chartData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: {
            boxWidth: 12,
            font: { size: 10 },
          },
        },
        title: {
          display: true,
          text: "Livestock Distribution",
        },
      },
    },
  });
};

onMounted(() => {
  createChart();
});

watch(
  () => props.chartData,
  (newData) => {
    if (chart) {
      chart.data = newData;
      chart.update();
    }
  },
  { deep: true }
);
</script>
