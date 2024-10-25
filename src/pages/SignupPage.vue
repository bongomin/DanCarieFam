<template>
  <q-page class="flex flex-center">
    <q-card class="signup-card">
      <q-card-section>
        <div class="text-h6">Sign Up</div>
      </q-card-section>

      <q-card-section>
        <q-input v-model="email" label="Email" type="email" />
        <q-input v-model="password" label="Password" type="password" />
        <q-input
          v-model="confirmPassword"
          label="Confirm Password"
          type="password"
        />
        <q-input v-model="companyId" label="Company ID" />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Already have an account? Login" to="/login" />
        <q-btn color="primary" label="Sign Up" @click="signup" />
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
const confirmPassword = ref("");
const companyId = ref("");

const signup = () => {
  console.log("Signup attempt", {
    email: email.value,
    companyId: companyId.value,
  });
  router.push("/login");
};
</script>

<style scoped>
.signup-card {
  width: 100%;
  max-width: 400px;
}
</style>
