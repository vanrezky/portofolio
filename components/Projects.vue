<template>
    <section class="my-container px-4" id="projects">
        <h2 class="text-3xl font-semibold mb-6">Portofolio</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
    </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue';

const projects = [
    {
        id: 1,
        title: 'CityTours',
        image: '/img/projects/citytours.png',
        tech: ['Laravel', 'MySQL', 'Angular', 'Redis', 'Bootsrap'],
        url: 'https://citytours.sg',
    },
    {
        id: 1,
        title: 'Geographical Information System',
        image: '/img/projects/gis.jpeg',
        tech: ['Codeigniter', 'MySQL', 'Jquery', 'Google Maps'],
        url: '#',
    },
    {
        id: 2,
        title: 'Computer Assistant Test',
        image: '/img/projects/CAT.png',
        tech: ['Laravel', 'Jquery', 'MySQL', 'Redis'],
        url: '#',
    },
    {
        id: 3,
        title: 'Pasar Jempol',
        image: '/img/projects/pasarjempol.png',
        tech: ['Laravel', 'Jquery', 'Bootstrap', 'Mysql'],
        url: '#',
    },
    {
        id: 4,
        title: 'Minipack Smart Campus (MISCA)',
        image: '/img/projects/smartminipack.png',
        tech: ['Laravel', 'Redis', 'Bootstrap', 'Mysql', 'Jquery', 'Queue', 'Integration API'],
        url: 'https://smartminipack.garudacyber.co.id/',
    },
    {
        id: 5,
        title: 'WS CLIENT',
        image: '/img/projects/wsclient.png',
        tech: ['Laravel', 'Redis', 'Bootstrap', 'Mysql', 'Jquery', 'Queue', 'Integration API'],
        url: '#',
    },
];
</script>
