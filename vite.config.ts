import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [react(),
  federation({
      name: 'core',
      remotes: {
         library: {
          type: "module",
          name: "library",
          entry:'https://music-library-snowy.vercel.app/remoteEntry.js',
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
