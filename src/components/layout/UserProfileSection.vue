<template>
  <div class="q-pa-md flex items-center">
    <q-avatar
      :color="avatarColor"
      :text-color="avatarTextColor"
      :icon="avatarIcon"
      :size="avatarSize"
    />
    <div class="q-ml-md" :class="textColor">
      <div :class="nameClass">{{ userName }}</div>
      <div :class="emailClass">{{ userEmail }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  avatarColor: {
    type: String,
    default: "primary",
  },
  avatarTextColor: {
    type: String,
    default: "white",
  },
  avatarIcon: {
    type: String,
    default: "person",
  },
  avatarSize: {
    type: String,
    default: "56px",
  },
  textColor: {
    type: String,
    default: "text-white",
  },
  nameClass: {
    type: String,
    default: "text-weight-bold",
  },
  emailClass: {
    type: String,
    default: "text-caption",
  },
});
</script>
