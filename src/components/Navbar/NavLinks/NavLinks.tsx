"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';

function NavLinks() {

    const path = usePathname();

    const links = [
        {
            id: 1,
            title: "Home",
            href: "/",
        },
        {
            id: 2,
            title: "Products",
            href: "/products",
        },
    ]

    return (
        <nav className='text-sm'>
            <ul className='between-screen gap-6'>
                {
                    links.map((link, key) => (
                        <li key={link.id} className={path === link.href ? "font-bold text-white" : ""}>
                            <Link href={link.href}>{link.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default NavLinks