/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
    readonly VITE_IS_DEV: string
    // add other env vars here if needed
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}