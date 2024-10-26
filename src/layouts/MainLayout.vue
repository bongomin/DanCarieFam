<template>
  <q-layout view="lHh Lpr lFf">
    <AppHeader @toggleDrawer="toggleLeftDrawer" />
    <DesktopMenu
      v-if="!$q.screen.lt.sm"
      v-model:isOpen="leftDrawerOpen"
      :links="linksList"
    />

    <q-page-container>
      <router-view />
    </q-page-container>

    <MobileMenu v-if="$q.screen.lt.sm" :menuItems="menuItems" />
    <AppFooter v-if="!$q.screen.lt.sm" />
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import AppHeader from "components/layout/AppHeader.vue";
import DesktopMenu from "components/layout/DesktopMenu.vue";
import MobileMenu from "components/layout/MobileMenu.vue";
import AppFooter from "components/layout/AppFooter.vue";

const $q = useQuasar();

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const menuItems = [
  {
    title: "Dashboard",
    icon: "dashboard",
    link: "/dashboard",
  },
  {
    title: "Livestock",
    icon: "pets",
    link: "/livestock",
  },
  {
    title: "Health",
    icon: "healing",
    link: "/health",
  },
];

const linksList = [
  {
    title: "Dashboard",
    caption: "Livestock Overview",
    icon: "dashboard",
    link: "/dashboard",
  },
  {
    title: "Livestock",
    caption: "Manage Livestock",
    icon: "pets",
    link: "/livestock",
  },
  {
    title: "Feeding",
    caption: "Feeding Schedules",
    icon: "restaurant",
    link: "/feeding",
  },
  {
    title: "Health",
    caption: "Health Records",
    icon: "healing",
    link: "/health",
  },
  {
    title: "Breeding",
    caption: "Breeding Program",
    icon: "favorite",
    link: "/breeding",
  },
  {
    title: "Nutrition",
    caption: "Nutrition Management",
    icon: "eco",
    link: "/nutrition",
  },
  {
    title: "Veterinary",
    caption: "Veterinary Care",
    icon: "local_hospital",
    link: "/veterinary",
  },
  {
    title: "Reports",
    caption: "Generate Reports",
    icon: "assessment",
    link: "/reports",
  },
  {
    title: "Notifications",
    caption: "View Alerts",
    icon: "notifications",
    link: "/notifications",
  },
];
</script>
