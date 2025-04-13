<template>
    <div class="bg-white dark:bg-gray-900 shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
        <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
        <div class="p-4">
            <h3 class="text-xl font-semibold">{{ project.title }}</h3>
            <p class="text-sm text-gray-500">{{ project.tech.join(', ') }}</p>
            <a :href="project.url" target="_blank" class="text-blue-500 hover:underline text-sm mt-2 inline-block"> View Project </a>
        </div>
    </div>
</template>

<script setup>
defineProps(['project']);
</script>
