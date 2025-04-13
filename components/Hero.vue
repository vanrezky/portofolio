<template>
    <section class="my-container flex items-center justify-center px-4 py-16" id="home">
        <div class="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <!-- Profile image with dreamy motion -->
            <Motion :initial="{ opacity: 0, scale: 0.8, y: 30 }" :enter="{ opacity: 1, scale: 1, y: 0, transition: { duration: 1.2, easing: 'ease-in-out' } }">
                <img src="/img/profile.png" alt="Profile" class="w-72 h-w-72 rounded-full border-4 p-1 border-y-cyan-400 border-x-cyan-600 border-dotted mx-auto md:mx-0" draggable="false" />
            </Motion>

            <!-- Text Content -->
            <Motion :initial="{ opacity: 0, x: 50 }" :enter="{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }">
                <div class="text-center md:text-left">
                    <h1 class="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Hi, I'm Van</h1>
                    <p ref="typeTarget" class="text-xl md:text-2xl text-zinc-700 dark:text-zinc-100 font-medium h-10" />
                    <p class="mt-6 text-base md:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">With over 5 years of experience in web development, I specialize in building seamless, performant, and beautifully crafted digital experiences. I love solving complex problems and turning ideas into meaningful products.</p>
                </div>
            </Motion>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import TypeIt from 'typeit';

const typeTarget = ref(null);

onMounted(() => {
    new TypeIt(typeTarget.value, {
        speed: 60,
        loop: true,
    })
        .type('Web Developer 💻')
        .pause(1000)
        .delete()
        .type('Tech Enthusiast ⚙️')
        .pause(1000)
        .delete()
        .type('Lover of Clean UI ✨')
        .pause(1000)
        .delete()
        .go();
});
</script>
