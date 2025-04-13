<template>
    <div class="font-sans">
        <NuxtPage />
    </div>
</template>
<script setup>
import { useColorMode } from '#imports';
const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === 'dark');
</script>
