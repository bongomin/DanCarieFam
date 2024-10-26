<template>
  <q-page class="row items-stretch">
    <!-- Left side: Branding and app description -->
    <branding-side />

    <!-- Right side: Login form -->
    <div class="col-12 col-md-6 flex flex-center bg-white">
      <q-card flat bordered class="login-card q-pa-lg">
        <q-card-section>
          <h5 class="text-h5 text-center q-mt-none q-mb-md">
            Login to DanCarieFam
          </h5>
        </q-card-section>

        <q-card-section>
          <q-form @submit="onSubmit" class="q-gutter-md">
            <q-input
              filled
              v-model="identifier"
              label="Email or Fam ID"
              :rules="[
                (val) => !!val || 'Email or Fam ID is required',
                (val) => validateIdentifier(val) || 'Invalid Email or Fam ID',
              ]"
            />

            <q-input
              filled
              v-model="password"
              label="Password"
              :type="isPwd ? 'password' : 'text'"
              :rules="[(val) => !!val || 'Password is required']"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

            <div class="text-right">
              <router-link to="/forgot-password" class="text-primary"
                >Forgot Password?</router-link
              >
            </div>

            <div>
              <q-btn
                label="Login"
                type="submit"
                color="primary"
                class="full-width"
              />
            </div>
          </q-form>
        </q-card-section>

        <q-card-section class="text-center q-pa-none">
          <p class="text-grey-6">
            New to DanCarieFam?
            <router-link to="/signup" class="text-primary">Sign up</router-link>
          </p>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import BrandingSide from "components/BrandingSide.vue";

const router = useRouter();
const identifier = ref("");
const password = ref("");
const isPwd = ref(true);

const validateIdentifier = (val) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const famIdRegex = /^[a-zA-Z0-9]{5,}$/;
  return emailRegex.test(val) || famIdRegex.test(val);
};

const onSubmit = async () => {
  try {
    console.log("Login submitted", {
      identifier: identifier.value,
      password: password.value,
    });
    router.push("/dashboard");
  } catch (error) {
    console.error("Login failed:", error);
  }
};
</script>

<style lang="scss" scoped>
.login-card {
  width: 100%;
  max-width: 400px;
}

@media (max-width: 599px) {
  .login-card {
    width: 80%;
  }
}
</style>
