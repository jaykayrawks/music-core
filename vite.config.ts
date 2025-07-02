import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite';
import dotenv from 'dotenv';

const {parsed}= dotenv.config()
console.log(parsed);
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  federation({
      name: 'core',
      remotes: {
         library: {
          type: "module",
          name: "library",
          entry:`${parsed.remote_path}/remoteEntry.js`,
        },
      },
      shared: {
        react: {
          singleton: true,
        },
      },
    })
    ],
    build: {
    target: 'chrome89',
  },
})
