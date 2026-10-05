import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Cambia este valor por tu dominio real antes de desplegar.
// El sitemap y las etiquetas canonical dependen de este valor para
// generar URLs absolutas correctas.
const SITE_URL = 'https://github.com/sunsytt/sunsytt.github.io.git';

export default defineConfig({
  site: SITE_URL,
  integrations: [
    tailwind({
      // Aplicamos nuestros estilos base manualmente en global.css,
      // así que desactivamos el reset por defecto de la integración
      // para tener control total sobre la paleta y tipografía.
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
