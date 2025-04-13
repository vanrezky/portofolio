<template>
    <div class="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white transition-colors duration-300 antialiased">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Hero from '@/components/Hero.vue';
import About from '@/components/About.vue';
import projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';
</script>
