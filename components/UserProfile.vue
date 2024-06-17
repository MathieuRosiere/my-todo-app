<script setup>
const props = defineProps({
    user: { type: Object, default: Object },
});
</script>
<template>
    <div>{{ props.user.id }}</div>
</template>

<style></style>
