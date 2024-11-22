/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
    content: [
        "./src/index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            zIndex: {
                'header': '100'
            },
            fontFamily: {
                'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
                'serif': ['Alegreya', ...defaultTheme.fontFamily.serif],
                'cursive': ['Great Vibes', 'Alegreya', ...defaultTheme.fontFamily.serif]
            },
            animation: {
                'spin-slow': 'spin 30s linear infinite'
            },
            backgroundImage: {
                'hero-home': 'url(/images/hero_banner.jpg)',
                'banner-menu': 'url(/images/banner-menu.jpg)',
                'banner-featured': 'url(/images/banner-featured.jpg)',
                'mountains': 'url(/images/bg-mountains.png)',
                'windmill': 'url(/images/bg-windmill.png)',
                'village': 'url(/images/bg-village.png)'
            },
            colors: {
                'straw': {
                    '50': '#fbf9f1',
                    '100': '#f6f0de',
                    '200': '#ecdebc',
                    '300': '#dfc691',
                    '400': '#d1a866',
                    '500': '#c89247',
                    '600': '#ba7c3c',
                    '700': '#9a6334',
                    '800': '#7c5030',
                    '900': '#654229',
                    '950': '#362114',
                },
                'gray': {
                    '50': '#f7f7f6',
                    '100': '#e5e3e2',
                    '200': '#cbc9c4',
                    '300': '#a9a69f',
                    '400': '#87827a',
                    '500': '#6c6860',
                    '600': '#56534c',
                    '700': '#46453f',
                    '800': '#3a3935',
                    '900': '#33312e',
                    '950': '#1b1a18',
                    'DEFAULT': '#56534c'
                },
                'leather': {
                    '50': '#f6f4f0',
                    '100': '#e9e2d8',
                    '200': '#d5c5b3',
                    '300': '#bca188',
                    '400': '#a47d5e',
                    '500': '#9a7258',
                    '600': '#845c4a',
                    '700': '#6a483e',
                    '800': '#5b3f38',
                    '900': '#4f3734',
                    '950': '#2d1d1b',
                },
                'laser': {
                    '50': '#faf8f2',
                    '100': '#f4f0e0',
                    '200': '#e7dfc1',
                    '300': '#d8c999',
                    '400': '#c9b176',
                    '500': '#bb9954',
                    '600': '#ad8549',
                    '700': '#906b3e',
                    '800': '#755737',
                    '900': '#5f482f',
                    '950': '#332417',
                },
            }
        },
        container: {center: true},
    },
    plugins: [],
}