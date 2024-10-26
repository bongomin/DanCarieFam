<template>
  <div class="branding-side col-12 col-md-6 flex flex-center bg-primary">
    <div class="text-white text-center q-pa-md">
      <img
        src="~assets/images/goat2.png"
        style="max-width: 600px; width: 100%"
        alt="DanCarie Enterprises Logo"
      />
      <h3 class="q-mt-md">DanCarieFam</h3>
      <h5 class="q-mb-md">Livestock Management App</h5>
      <p class="text-body1">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  description: {
    type: String,
    default:
      "Efficiently manage your livestock with our comprehensive solution. Track animals, feeding schedules, health records, and more.",
  },
});
</script>

<style lang="scss" scoped>
.branding-side {
  min-height: 100%;
}

@media (max-width: 1023px) {
  .branding-side {
    min-height: auto;
    padding: 2rem 0;
  }
}
</style>
