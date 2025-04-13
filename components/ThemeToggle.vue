<template>
    <button @click="toggle" class="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:scale-125 ease-out duration-200">
        <span v-if="colorMode.value === 'dark' || colorMode.value === 'system'">
            <Sun size="20" class="text-yellow-400" />
        </span>
        <span v-else>
            <MoonStar size="20" class="text-gray-800" />
        </span>
    </button>
</template>

<script setup>
import { useColorMode } from '#imports';
import { Sun, MoonStar } from 'lucide-vue-next';
const colorMode = useColorMode();
const toggle = () => (colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light');
</script>
