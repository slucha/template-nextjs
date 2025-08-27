"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { NAV_LINKS, type NavLink } from '@/lib/nav'
import { Menu } from 'lucide-react'

// Using a minimal custom Sheet to avoid adding new deps if Sheet is not present.
// If shadcn/ui Sheet is available in this project, we can swap to it later.
export function MobileNav({ className }: { className?: string }) {
	const pathname = usePathname()
	const [open, setOpen] = useState(false)

	useEffect(() => {
		setOpen(false)
	}, [pathname])

	useEffect(() => {
		function onKey(event: KeyboardEvent) {
			if (event.key === 'Escape') setOpen(false)
		}
		document.addEventListener('keydown', onKey)
		return () => document.removeEventListener('keydown', onKey)
	}, [])

	return (
		<div className={className}>
			<Button
				variant="ghost"
				size="icon"
				className="md:hidden"
				aria-label="Open menu"
				onClick={() => setOpen(true)}
			>
				<Menu className="h-5 w-5" />
			</Button>
			{open ? (
				<>
					<div
						className="fixed inset-0 z-40 bg-black/50"
						role="presentation"
						onClick={() => setOpen(false)}
					/>
					<div
						className="fixed left-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-lg outline-none focus:outline-none"
						role="dialog"
						aria-modal="true"
					>
						<nav className="flex flex-col gap-y-2 p-4">
							{NAV_LINKS.map((link: NavLink) => (
								<Link
									key={link.href}
									href={link.href}
									className="rounded px-3 py-2 text-base font-medium text-foreground/90 hover:text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
									onClick={() => setOpen(false)}
								>
									{link.label}
								</Link>
							))}
						</nav>
					</div>
				</>
			) : null}
		</div>
	)
}