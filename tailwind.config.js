/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'], // Mengganti default 'sans' dengan Poppins
            },
            screens: {
                '2xl': '1600px',
                '3xl': '1800px',
                '4xl': '2200px',
                '5xl': '2600px',
            },
            colors: {
                primary: {
                    default: '#FF5151', // Warna utama
                    light: '#B2B2B2', // Warna lebih terang
                    dark: '#1E40AF', // Warna lebih gelap
                },
                secondary: {
                    DEFAULT: '#10B981', // Warna sekunder
                    light: '#6EE7B7', // Warna lebih terang
                    dark: '#047857', // Warna lebih gelap
                },
                warning: '#F59E0B', // Warna untuk peringatan
                error: '#EF4444', // Warna untuk kesalahan
                success: '#22C55E', // Warna untuk keberhasilan
                neutral: {
                    100: '#F3F4F6', // Warna abu terang
                    200: '#E5E7EB', // Warna abu sedang
                    300: '#D1D5DB', // Warna abu gelap
                },
            },
        },
    },
    plugins: [],
};
