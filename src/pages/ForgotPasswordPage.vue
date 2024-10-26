<template>
  <q-page class="row items-stretch">
    <branding-side class="col-md-6 col-12" />
    <div class="col-md-6 col-12 flex flex-center">
      <form-card title="Reset Your Password">
        <template v-slot:form>
          <p class="text-body1 q-mb-md">
            Enter your Fam ID or email address, and we'll send you instructions
            to reset your password.
          </p>
          <q-form @submit="onSubmit" class="q-gutter-md">
            <q-input
              filled
              v-model="identifier"
              label="Fam ID or Email"
              :rules="[
                (val) => !!val || 'Fam ID or Email is required',
                (val) =>
                  validateIdentifier(val) ||
                  'Please enter a valid Fam ID or Email',
              ]"
            />

            <div>
              <q-btn
                label="Send Reset Instructions"
                type="submit"
                color="primary"
                class="full-width"
              />
            </div>
          </q-form>
        </template>

        <template v-slot:footer>
          <p class="text-grey-6 q-mt-md">
            Remembered your password?
            <router-link to="/" class="text-primary">Back to Login</router-link>
          </p>
        </template>
      </form-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import BrandingSide from "components/BrandingSide.vue";

export default defineComponent({
  name: "ForgotPasswordPage",
  components: {
    BrandingSide,
    FormCard,
  },
  setup() {
    const $q = useQuasar();
    const identifier = ref("");

    const validateIdentifier = (val) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const famIdRegex = /^[a-zA-Z0-9]{5,}$/;
      return emailRegex.test(val) || famIdRegex.test(val);
    };

    const onSubmit = () => {
      // Here you would typically call an API to send reset instructions
      console.log("Reset password requested for:", identifier.value);

      // Show a success message to the user
      $q.notify({
        color: "positive",
        textColor: "white",
        icon: "check",
        message: "Password reset instructions have been sent to your email.",
      });

      // Clear the form
      identifier.value = "";
    };

    return {
      identifier,
      validateIdentifier,
      onSubmit,
    };
  },
});
</script>

<style lang="scss" scoped>
.q-page {
  min-height: 100vh;
}

@media (max-width: 1023px) {
  .q-page {
    flex-direction: column;
  }
}
</style>
