import react from "@vitejs/plugin-react"
import {defineConfig} from "vite"
import vitePluginSvgr from "vite-plugin-svgr";
import {fileURLToPath, URL} from "node:url";

const baseUrl = process.env.BASE_URL || './';

// https://vite.dev/config/
export default defineConfig({
    base: baseUrl,
    plugins: [
        react(),
        vitePluginSvgr()
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
})
