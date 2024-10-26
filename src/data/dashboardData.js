export const summaryStats = [
  { title: "Total Livestock", value: "500" },
  { title: "Healthy Animals", value: "480" },
  { title: "Under Treatment", value: "20" },
  { title: "Total Production", value: "1000 L" },
];

export const livestockDetails = [
  {
    type: "Cattle",
    count: 300,
    percentage: 60,
    icon: "mdi-cow",
    status: "Healthy",
    chipColor: "positive",
  },
  {
    type: "Sheep",
    count: 100,
    percentage: 20,
    icon: "mdi-sheep",
    status: "Vaccinated",
    chipColor: "info",
  },
  {
    type: "Goats",
    count: 80,
    percentage: 16,
    icon: "mdi-goat",
    status: "Breeding",
    chipColor: "warning",
  },
  {
    type: "Pigs",
    count: 20,
    percentage: 4,
    icon: "mdi-pig",
    status: "New Born",
    chipColor: "primary",
  },
];

export const recentActivities = [
  {
    id: 1,
    icon: "mdi-cow",
    description: "New calf born",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    icon: "mdi-medical-bag",
    description: "Vaccination completed",
    timestamp: "5 hours ago",
  },
  {
    id: 3,
    icon: "mdi-truck",
    description: "Feed delivery received",
    timestamp: "Yesterday",
  },
  {
    id: 4,
    icon: "mdi-clipboard-text",
    description: "Health check-up completed",
    timestamp: "2 days ago",
  },
  {
    id: 5,
    icon: "mdi-food-apple",
    description: "New feed stock arrived",
    timestamp: "3 days ago",
  },
];

export const productionDetails = [
  {
    name: "Milk",
    amount: 1500,
    unit: "L",
    trend: "up",
    percentage: 7,
    icon: "mdi-bottle-tonic",
  },
  {
    name: "Eggs",
    amount: 5000,
    unit: "pcs",
    trend: "up",
    percentage: 3,
    icon: "mdi-egg",
  },
  {
    name: "Wool",
    amount: 200,
    unit: "kg",
    trend: "down",
    percentage: 2,
    icon: "mdi-sheep",
  },
  {
    name: "Meat",
    amount: 500,
    unit: "kg",
    trend: "up",
    percentage: 5,
    icon: "mdi-food-steak",
  },
];
