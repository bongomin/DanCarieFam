<template>
  <q-responsive :ratio="16 / 9">
    <canvas ref="chartRef"></canvas>
  </q-responsive>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import {
  Chart,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Title,
  Tooltip,
} from "chart.js";

Chart.register(
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Title,
  Tooltip
);

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
    type: "bar",
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
          text: "Monthly Production",
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
