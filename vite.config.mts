import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import zaloMiniApp from 'zmp-vite-plugin'

export default () => {
  return defineConfig({
    base: '/',
    plugins: [react(), zaloMiniApp()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    build: {
      outDir: 'www', // ✅ Thay vì 'dist'
    },
  })
}
