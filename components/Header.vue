<template>
    <nav class="my-container px-4 py-6">
        <div class="flex items-center justify-between">
            <!-- Logo -->
            <div class="text-2xl font-bold">
                <a href="/" class="text-primary">Van's</a>
            </div>

            <div class="flex items-center md:space-x-8">
                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#home" class="text-menu text-black">Home</a>
                    <a href="#about" class="text-menu">About</a>
                    <a href="#projects" class="text-menu">Projects</a>
                </div>
                <ThemeToggle class="order-first md:order-last" />
                <!-- Mobile Menu Button -->
                <button @click="isOpen = !isOpen" class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Menu v-if="!isOpen" />
                    <X v-else />
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div v-show="isOpen" class="md:hidden mt-4 space-y-4">
            <a href="#home" class="text-menu text-black block py-2">Home</a>
            <a href="#about" class="text-menu block py-2">About</a>
            <a href="#projects" class="text-menu block py-2">Projects</a>
        </div>
        <!-- Theme Toggle -->
    </nav>
</template>

<script setup>
import ThemeToggle from './ThemeToggle.vue';
import { Menu, X } from 'lucide-vue-next';
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};

const closeMenu = () => {
    isOpen.value = false;
};
</script>
