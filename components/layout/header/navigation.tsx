import { navItems } from '@/lib/data/navigation'
import { NavLink } from './nav-link'

export function Navigation() {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-6">
        {navItems.map(item => (
          <li key={item.href}>
            <NavLink item={item} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
