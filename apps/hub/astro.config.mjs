// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
	site: 'https://www.hackerrankcrewgdl.com',
	adapter: vercel(),
	vite: {
		server: {
			proxy: {
				'/slides/resume-building-101': {
					target: 'http://localhost:3031',
					changeOrigin: true,
				},
				'/slides/technical-interview': {
					target: 'http://localhost:3032',
					changeOrigin: true,
				},
				'/slides/asegura-tu-futuro': {
					target: 'http://localhost:3033',
					changeOrigin: true,
				},
			},
		},
	},
	integrations: [


		sitemap(),
		starlight({
			title: 'HackerRank Crew GDL',
			description: 'Primera comunidad oficial de HackerRank Crew en México. Impulsamos talento con mentoría, talleres y recursos para crecer en tech.',
			locales: {
				root: {
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
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: 'https://www.hackerrankcrewgdl.com/og-image.jpg',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:type',
						content: 'website',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:locale',
						content: 'es_ES',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:card',
						content: 'summary_large_image',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:image',
						content: 'https://www.hackerrankcrewgdl.com/og-image.jpg',
					},
				},
			],
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
