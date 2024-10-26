<template>
  <q-page class="row items-stretch">
    <branding-side
      description="Join DanCarieFam to efficiently manage your livestock. Get started with our comprehensive solution today!"
    />
    <div class="col-12 col-md-6 flex flex-center bg-white">
      <q-card flat bordered class="signup-card q-pa-lg">
        <q-card-section>
          <h5 class="text-h5 text-center q-mt-none q-mb-md">
            Sign Up for DanCarieFam
          </h5>
        </q-card-section>

        <q-card-section>
          <q-form @submit="onSubmit" class="q-gutter-md">
            <q-input
              filled
              v-model="famName"
              label="Fam Name"
              :rules="[(val) => !!val || 'Fam Name is required']"
            />

            <q-input
              filled
              v-model="email"
              label="Email"
              type="email"
              :rules="[
                (val) => !!val || 'Email is required',
                (val) => isValidEmail(val) || 'Please enter a valid email',
              ]"
            />

            <q-input
              filled
              v-model="password"
              label="Password"
              :type="isPwd ? 'password' : 'text'"
              :rules="[
                (val) => !!val || 'Password is required',
                (val) =>
                  val.length >= 8 ||
                  'Password must be at least 8 characters long',
              ]"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

            <q-input
              filled
              v-model="companyId"
              label="Company ID"
              :rules="[(val) => !!val || 'Company ID is required']"
            />

            <q-input
              filled
              v-model="location"
              label="Location"
              :rules="[(val) => !!val || 'Location is required']"
            />

            <div>
              <q-btn
                label="Sign Up"
                type="submit"
                color="primary"
                class="full-width"
              />
            </div>
          </q-form>
        </q-card-section>

        <q-card-section class="text-center q-pa-none">
          <p class="text-grey-6">
            Already have an account?
            <router-link to="/" class="text-primary">Log in</router-link>
          </p>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import BrandingSide from "components/BrandingSide.vue";

export default defineComponent({
  name: "SignupPage",
  components: { BrandingSide },
  setup() {
    const router = useRouter();
    const famName = ref("");
    const email = ref("");
    const password = ref("");
    const companyId = ref("");
    const location = ref("");
    const isPwd = ref(true);

    const isValidEmail = (val) => {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val);
    };

    const onSubmit = () => {
      console.log("Signup submitted", {
        famName: famName.value,
        email: email.value,
        password: password.value,
        companyId: companyId.value,
        location: location.value,
      });
    };

    return {
      famName,
      email,
      password,
      companyId,
      location,
      isPwd,
      isValidEmail,
      onSubmit,
    };
  },
});
</script>

<style lang="scss" scoped>
.signup-card {
  width: 100%;
  max-width: 400px;
}

@media (max-width: 599px) {
  .signup-card {
    width: 80%;
  }
}
</style>
