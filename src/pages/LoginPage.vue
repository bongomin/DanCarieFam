<template>
  <q-page class="flex flex-center">
    <q-card class="login-card">
      <q-card-section>
        <div class="text-h6">Login</div>
      </q-card-section>

      <q-card-section>
        <q-input v-model="email" label="Email" type="email" />
        <q-input v-model="password" label="Password" type="password" />
        <q-input v-model="companyId" label="Company ID" />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Forgot Password?" to="/forgot-password" />
        <q-btn flat label="Sign Up" to="/signup" />
        <q-btn color="primary" label="Login" @click="login" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");
const companyId = ref("");

const login = () => {
  console.log("Login attempt", {
    email: email.value,
    companyId: companyId.value,
  });
  router.push("/dashboard");
};
</script>

<style scoped>
.login-card {
  width: 100%;
  max-width: 400px;
}
</style>
