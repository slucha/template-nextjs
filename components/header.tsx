import Link from 'next/link'
import { DesktopNav } from '@/components/desktop-nav'
import { MobileNav } from '@/components/mobile-nav'

export function Header() {
	return (
		<header className="sticky top-0 z-30 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
				<Link href="/" className="font-semibold text-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">
					Logo
				</Link>
				<DesktopNav className="hidden md:flex" />
				<MobileNav className="md:hidden" />
			</div>
		</header>
	)
}