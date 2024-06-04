<script setup>
const props = defineProps({
    content: { type: String, default: "button" },
});
</script>

<template>
  <button
    class="btn"
    @click="$emit('emitEvent')"
  >
    {{ props.content }}
  </button>
</template>

<style>
.btn {
    background-color: var(--main-bg);
    color: var(--secondary-font-color);
    border: 1px solid var(--card-font-color);
    border-radius: 8px;
    padding: 5px 10px;
    transition:
        transform 350ms ease,
        box-shadow 350ms ease;
}

.btn:hover {
    cursor: pointer;
    box-shadow: 5px 5px 0px 0px var(--card-font-color);
    transform: scale(1.1);
}
</style>
