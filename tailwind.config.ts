export default {
    darkMode: 'class',
    content: ['./components/**/*.{vue,js}', './pages/**/*.{vue,js}', './app.vue'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Space Grotesk', 'sans-serif'],
                code: ['Fira Code', 'monospace'],
            },
        // colors: {
        //     primary: '#000000', // Hitam pekat
        //     secondary: '#1F2937', // Abu-abu gelap (seperti gray-800)
        //     accent: '#FFFFFF', // Putih
        //     neutral: '#9CA3AF', // Abu-abu netral (seperti gray-400)
        //     base: {
        //         DEFAULT: '#F9FAFB', // Putih kebiruan terang (seperti gray-50)
        //         content: '#111827', // Hitam kebiruan gelap (seperti gray-900)
        //     },
        //     info: '#3B82F6', // Biru (seperti blue-500)
        //     success: '#10B981', // Hijau (seperti green-500)
        //     warning: '#F59E0B', // Kuning (seperti amber-500)
        //     error: '#EF4444',
        // },
        },
    },
    plugins: [],
};
