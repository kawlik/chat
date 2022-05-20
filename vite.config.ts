import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';


/*  Define Vite Config
/*   *   *   *   *   *   *   *   *   *   */
export default defineConfig({

    //  used plugins
    plugins: [
        react(),
        VitePWA({

            //  PWA mode
            registerType: 'autoUpdate',

            //  workbox options
            workbox: {
                cleanupOutdatedCaches: false, 
            },

            //  included assets
            includeAssets: [
                'favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png',
            ],

            //  manifest
            manifest: {

                name: 'Chat!',
                short_name: 'Chat!',

                display: 'standalone',
                theme_color: '#ffffff',
                background_color: '#ffffff',
                orientation: 'portrait',

                description: 'Chat! A simple PWA app for training purpose!',

                icons: [
                    {
                        src: 'android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
                // screenshots: [
                //     {
                //         src: 'screenshot-01.jpg',
                //         sizes: '1080x2340',
                //         type: 'image/jpg',
                //     },
                //     {
                //         src: 'screenshot-02.jpg',
                //         sizes: '1080x2340',
                //         type: 'image/jpg',
                //     },
                //     {
                //         src: 'screenshot-03.jpg',
                //         sizes: '1080x2340',
                //         type: 'image/jpg',
                //     },
                // ],
            },
        })
    ],
});