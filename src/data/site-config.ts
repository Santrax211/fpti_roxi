// src/data/site-config.ts

/**
 * Este archivo SOLO exporta datos “puros”.
 * NO importamos aquí ningún .astro.
 */

export interface SocialNetwork {
	name: string // Ej: "Twitter"
	url: string // Ej: "https://twitter.com/…"
	iconName: string // Aquí sólo guardamos el nombre del icono, p.ej. "TwitterIcon"
}

export interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
	socials: SocialNetwork[]
}

export const siteConfig: SiteConfig = {
	site: 'https://blog-template-gray.vercel.app/',
	author: 'Roxana – Jheremy – Aníbal – Víctor – Claudio',
	title:
		'Evaluación e implementación de la infraestructura de red y almacenamiento para 10 computadoras en F&R Corp S.A.C.',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post',
	paginationSize: 6,

	// En lugar de importar el componente, almacenamos solo el nombre
	socials: [
		{ name: 'Twitter', url: 'https://twitter.com/tuusuario', iconName: 'TwitterIcon' },
		{ name: 'GitHub', url: 'https://github.com/tuusuario', iconName: 'GithubIcon' }
	]
}
