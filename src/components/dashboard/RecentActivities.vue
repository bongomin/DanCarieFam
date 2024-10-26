<template>
  <div class="col-12 col-lg-4 gt-sm">
    <q-card>
      <q-card-section>
        <div class="text-h6">Recent Activities</div>
        <q-list>
          <q-item v-for="activity in activities" :key="activity.id">
            <q-item-section avatar>
              <q-icon :name="activity.icon" color="primary" size="sm" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-subtitle2">{{
                activity.description
              }}</q-item-label>
              <q-item-label caption>{{ activity.timestamp }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
defineProps({
  activities: {
    type: Array,
    required: true,
  },
});
</script>
