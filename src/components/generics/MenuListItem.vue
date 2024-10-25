<template>
  <q-item
    :clickable="clickable"
    :tag="tag"
    :target="target"
    :href="link"
    :class="['q-py-md', textColor]"
    v-bind="$attrs"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" :color="iconColor" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="titleClass">{{ title }}</q-item-label>
      <q-item-label v-if="caption" caption :class="captionClass">
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "#",
  },
  icon: {
    type: String,
    default: "",
  },
  // New props
  clickable: {
    type: Boolean,
    default: true,
  },
  tag: {
    type: String,
    default: "a",
  },
  target: {
    type: String,
    default: "_blank",
  },
  textColor: {
    type: String,
    default: "text-white",
  },
  iconColor: {
    type: String,
    default: "accent",
  },
  titleClass: {
    type: String,
    default: "text-weight-bold",
  },
  captionClass: {
    type: String,
    default: "text-white-8",
  },
});
</script>
