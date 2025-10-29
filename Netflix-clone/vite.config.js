import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/-Netflix-Clone-project/', // ✅ must match your GitHub repo name exactly
})
