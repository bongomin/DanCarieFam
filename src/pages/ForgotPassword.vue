<template>
  <q-page class="flex flex-center">
    <q-card class="forgot-password-card">
      <q-card-section>
        <div class="text-h6">Forgot Password</div>
      </q-card-section>

      <q-card-section>
        <q-input v-model="email" label="Email" type="email" />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Back to Login" to="/login" />
        <q-btn color="primary" label="Reset Password" @click="resetPassword" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");

const resetPassword = () => {
  console.log("Password reset requested for", email.value);
};
</script>

<style scoped>
.forgot-password-card {
  width: 100%;
  max-width: 400px;
}
</style>
