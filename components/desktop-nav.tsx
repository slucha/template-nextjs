import Link from 'next/link'
import { NAV_LINKS, type NavLink } from '@/lib/nav'
import { cn } from '@/lib/utils'

export function DesktopNav({ className }: { className?: string }) {
	return (
		<nav className={cn('hidden md:flex items-center gap-x-6', className)}>
			{NAV_LINKS.map((link: NavLink) => (
				<Link
					key={link.href}
					href={link.href}
					className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
				>
					{link.label}
				</Link>
			))}
		</nav>
	)
}