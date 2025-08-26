export type NavLink = {
	href: string
	label: string
}

export const NAV_LINKS: NavLink[] = [
	{ href: '/', label: 'Startseite' },
	{ href: '/leistungen', label: 'Leistungen' },
	{ href: '/ueber-uns', label: 'Über uns' },
	{ href: '/kontakt', label: 'Kontakt' },
	{ href: '/impressum', label: 'Impressum' },
	{ href: '/datenschutz', label: 'Datenschutz' },
	{ href: '/agb', label: 'AGB' },
]