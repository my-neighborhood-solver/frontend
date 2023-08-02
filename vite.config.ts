import { defineConfig, loadEnv } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ mode }) => {  
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            kakao_map_api_key: env.VITE_KAKAO_MAP_KEY,
          }
        }
      }),
    ],
    server: {
      proxy: {
        '/api': {
          target: 'http://3.34.174.154:8080',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          secure: false,
          ws: true
        }
      }
    }
  }
}