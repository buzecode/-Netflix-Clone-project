import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'




export default defineConfig({
  plugins: [react()],
  base: '/Netflix-projuct/', // 👈 repo name goes here
})
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// export default defineConfig({
//   plugins: [react()],
//   base: '/Netflix-project/', // 👈 repo name goes here
// })