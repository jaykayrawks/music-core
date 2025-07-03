import { defineConfig,loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd());
  const remote_URL = `${env.VITE_REMOTE_URL ?? 'http://localhost:3001'}`;
  return {
  plugins: [react(),
  federation({
      name: 'core',
      remotes: {
         library: {
          type: "module",
          name: "library",
          entry:remote_URL + '/remoteEntry.js',
        },
      },
      shared: {
        react: {
          singleton: true,
        },
      },
    }),
    
    
   ],
  test: {
    globals: true,
    environment: "jsdom",
    reporters: ['html'],
  },
   build: {
    target: 'chrome89',
  }
};

});
