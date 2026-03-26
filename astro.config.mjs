// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'HackerRank Crew GDL',
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
						{ label: 'Resume Building 101', slug: 'sessions/resume-building-101' },
					],
				},
			],
		}),
	],
});
