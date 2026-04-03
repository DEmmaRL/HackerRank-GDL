// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://www.hackerrankcrewgdl.com',
	integrations: [
		starlight({
			title: 'HackerRank Crew GDL',
			description: '¡La primera célula del programa HackerRank Campus Crew en México! Con sede en Guadalajara. Nuestro objetivo es empoderar a estudiantes de Guadalajara con las herramientas, mentoría y conocimientos para navegar con éxito la transición de la academia al mundo profesional tecnológico.',
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
