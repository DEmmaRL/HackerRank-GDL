// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Home',
			defaultLocale: 'es',
			locales: {
				es: {
					label: 'ES',
					lang: 'es',
				},
				en: {
					label: 'EN',
					lang: 'en',
				},
			},
			components: {
				PageFrame: './src/components/PageFrame.astro',
				Hero: './src/components/Hero.astro',
			},
			logo: {
				light: './public/logos/logo-dark-narrow.svg',
				dark: './public/logos/logo-light-narrow.svg',
				replacesTitle: true,
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/hackerrank-gdl' },
				{ icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/channel/UCU1GwiscWovSP0xS5xBL2iA' },
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Sesiones',
					translations: {
						en: 'Sessions',
					},
					autogenerate: { directory: 'sessions' },
				},
			],
		}),
	],
});
