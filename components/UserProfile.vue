<script setup>
const props = defineProps({
    user: { type: Object },
});
</script>
<template>
  <div>{{ props.user }}</div>
</template>

<style></style>
