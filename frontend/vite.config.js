import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // server:{
  //   proxy:{
  //     "/api":{
  //       target:"localhost:5000/",
  //       changeOrigin:true,
  //     },
  //   },
  // },
  plugins: [react()],
})
