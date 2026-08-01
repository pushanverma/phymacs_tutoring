import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Component files in this project use JSX inside .js (not .jsx) extensions,
// so both esbuild (dev) and the pre-bundler need to be told to parse them as JSX.
export default defineConfig({
  plugins: [react({ include: '**/*.{js,jsx}' })],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },
})
