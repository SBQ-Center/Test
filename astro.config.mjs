import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://sbq-center-website.pages.dev',
  output: 'static',
  build: { format: 'directory' },
  i18n: { defaultLocale: 'ar', locales: ['ar','en'], routing: { prefixDefaultLocale: false } }
});
