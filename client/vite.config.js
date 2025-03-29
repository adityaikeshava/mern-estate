import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'localhost', // Ensures the server binds to localhost (important for WebSocket issues)
    port: 5173,        // Explicitly specifying the port
    strictPort: true,  // Prevents fallback to random ports if 5173 is busy
    watch: {
      usePolling: true // Ensures changes are detected in all environments
    },
    hmr: {
      protocol: 'ws',   // Explicitly set WebSocket protocol
      host: 'localhost',
      port: 5173,       // Ensures HMR uses the correct port
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        ws: true,       // Ensures WebSocket connections are proxied correctly
      }
    }
  },
  plugins: [react()],
});

