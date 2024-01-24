// import * as path from 'path';

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss', 
        'nuxt-primevue', 
        '@pinia/nuxt',

        ['@nuxtjs/eslint-module', { /* module options */ }]
    ],
    primevue: {
        options: { unstyled: true },
        // importPT: { as: 'Lara', from: path.resolve(__dirname, './presets/lara/') },

        // ref: https://github.com/primefaces/primevue-nuxt-module/issues/6#issuecomment-1870464180
        // importPT: { as: "Lara", from: "~/presets/lara" },
        importPT: { as: "Lara", from: "@/presets/lara" }, 

        components: {
            exclude: ["Editor", "Chart"]
        }
    },
    tailwindcss: {
        config: {
            content: [
                "presets/**/*.{js,vue,ts}"
            ],
            theme: {
                extend: {
                    colors: {
                        "primary-50": "rgb(var(--primary-50))",
                        "primary-100": "rgb(var(--primary-100))",
                        "primary-200": "rgb(var(--primary-200))",
                        "primary-300": "rgb(var(--primary-300))",
                        "primary-400": "rgb(var(--primary-400))",
                        "primary-500": "rgb(var(--primary-500))",
                        "primary-600": "rgb(var(--primary-600))",
                        "primary-700": "rgb(var(--primary-700))",
                        "primary-800": "rgb(var(--primary-800))",
                        "primary-900": "rgb(var(--primary-900))",
                        "primary-950": "rgb(var(--primary-950))",
                        "surface-0": "rgb(var(--surface-0))",
                        "surface-50": "rgb(var(--surface-50))",
                        "surface-100": "rgb(var(--surface-100))",
                        "surface-200": "rgb(var(--surface-200))",
                        "surface-300": "rgb(var(--surface-300))",
                        "surface-400": "rgb(var(--surface-400))",
                        "surface-500": "rgb(var(--surface-500))",
                        "surface-600": "rgb(var(--surface-600))",
                        "surface-700": "rgb(var(--surface-700))",
                        "surface-800": "rgb(var(--surface-800))",
                        "surface-900": "rgb(var(--surface-900))",
                        "surface-950": "rgb(var(--surface-950))",
                    },
                },
            },
        }
    }
})
