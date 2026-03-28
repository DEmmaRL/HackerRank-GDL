// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Home',
			components: {
				PageFrame: './src/components/PageFrame.astro',
			},
			logo: {
				light: './public/logos/logo-dark-narrow.svg',
				dark: './public/logos/logo-light-narrow.svg',
				replacesTitle: true,
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/hackerrank-gdl' }],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Sesiones',
					items: [
						{ label: 'Cómo construir un resume de clase mundial', slug: 'sessions/construir-un-resume-de-clase-mundial' },
					],
				},
			],
		}),
	],
});
