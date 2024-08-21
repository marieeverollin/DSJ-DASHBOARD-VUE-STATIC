import { defineConfig } from 'vite'
import { resolve } from 'path'
import ViteRestart from 'vite-plugin-restart';
import tailwindcss from 'tailwindcss';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    css: {
        postcss: resolve(__dirname, 'postcss.config.js')
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    build: {
      rollupOptions: {
        input: {
          app: './src/js/main.js',
          style: './src/sass/app.scss',
        },
        output: {
          sourcemap: true,
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',

          assetFileNames: ({name}) => {
              if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
                  return 'assets/images/[name][extname]';
              }

              if (/\.css$/.test(name ?? '')) {
                  return 'assets/css/[name][extname]';
              }

              // default value
              // ref: https://rollupjs.org/guide/en/#outputassetfilenames
              return 'assets/[name][extname]';
          },
        },
      }
    },
    plugins: [
      // legacy({
      //     targets: ['defaults', 'not IE 11']
      // }),
      vue(),
      tailwindcss(),
      ViteRestart({
          reload: [
              'blocks/*.html*',
          ],
      }),
  ],
  })
