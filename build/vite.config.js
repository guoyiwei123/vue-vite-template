const { resolve } = require('path');
const { defineConfig } = require('vite');
const vue = require('@vitejs/plugin-vue');
const eslintPlugin = require('@nabla/vite-plugin-eslint');
module.exports = defineConfig({
    build: {
        outDir: './dist',
        sourcemap: 'hidden'
    },
    plugins: [
        vue(),
        // eslintPlugin({
        //     eslintOptions: {
        //         overrideConfigFile: resolve(__dirname, './.eslintrc.js'),
        //         extensions: ['js', 'vue'],
        //         cwd: resolve(__dirname, '../src'),
        //         fix: true,
        //         ignorePath: resolve(__dirname, './.eslintignore'),
        //         cache: false
        //     }
        // })
    ],
    resolve: {
        alias: {
            '~assets': resolve(__dirname, '../src/assets'),
            '~components': resolve(__dirname, '../src/components'),
            '~pages': resolve(__dirname, '../src/pages'),
            '~layout': resolve(__dirname, '../src/layout'),
            '~config': resolve(__dirname, '../src/config'),
            '~store': resolve(__dirname, '../src/store'),
            '~utils': resolve(__dirname, '../src/utils'),
            '~models': resolve(__dirname, '../src/models')
        },
        extensions: ['.mjs', '.js', '.json', '.vue']
    },
    server: {
        proxy: {
            '^/api': {
                target: 'http://127.0.0.1:10000',
                changeOrigin: true,
                // rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
});

