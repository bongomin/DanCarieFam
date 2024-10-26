import { ref } from "vue";

export function useChartData() {
  const monthlyProductionData = ref([1000, 1200, 1100, 1300, 1400, 1500]);

  return {
    monthlyProductionData,
  };
}
