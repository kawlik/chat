import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


/*  Define Vite Config
/*   *   *   *   *   *   *   *   *   *   */
export default defineConfig({

    //  used plugins
    plugins: [
        react()
    ],
});