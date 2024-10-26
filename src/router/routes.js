const routes = [
  {
    path: "/",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      { path: "", component: () => import("pages/LoginPage.vue") },
      { path: "signup", component: () => import("pages/SignupPage.vue") },
      {
        path: "forgot-password",
        component: () => import("pages/ForgotPasswordPage.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "dashboard", component: () => import("pages/DashboardPage.vue") },
      {
        path: "livestock",
        component: () => import("pages/LivestockManagementPage.vue"),
      },
      {
        path: "feeding",
        component: () => import("pages/FeedingSchedulePage.vue"),
      },
      {
        path: "health",
        component: () => import("pages/HealthRecordsPage.vue"),
      },
      {
        path: "breeding",
        component: () => import("pages/BreedingProgramPage.vue"),
      },
      {
        path: "nutrition",
        component: () => import("pages/NutritionManagerPage.vue"),
      },
      {
        path: "veterinary",
        component: () => import("pages/VeterinaryCarePage.vue"),
      },
      { path: "reports", component: () => import("pages/ReportsPage.vue") },
      {
        path: "notifications",
        component: () => import("pages/NotificationsPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
