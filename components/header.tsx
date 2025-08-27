import Link from 'next/link'
import { DesktopNav } from '@/components/desktop-nav'
import { MobileNav } from '@/components/mobile-nav'

export function Header() {
	return (
		<header className="sticky top-0 z-30 w-full border-b bg-background md:bg-background/80 md:backdrop-blur md:supports-[backdrop-filter]:bg-background/60">
			<div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
				<Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">
					<div className="w-10 h-10 bg-[#00968F] rounded-lg flex items-center justify-center">
						<span className="text-white font-bold">Z</span>
					</div>
					<span className="hidden sm:inline-block font-semibold text-foreground">DIZT</span>
				</Link>
				<DesktopNav className="hidden md:flex" />
				<MobileNav className="md:hidden" />
			</div>
		</header>
	)
}