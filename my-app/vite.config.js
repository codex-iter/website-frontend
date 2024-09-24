import {resolve} from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const outDir = resolve(__dirname, "../build")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: outDir
  }
})
