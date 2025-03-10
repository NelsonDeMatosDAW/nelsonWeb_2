'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Menu() {
    const pathname = usePathname()
    const [currentMenuItem, setCurrentMenuItem] = useState("")

    useEffect(() => {
        setCurrentMenuItem(pathname)
    }, [pathname])

    const checkCurrentMenuItem = (path) => currentMenuItem === path ? "active" : ""
    const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "active" : ""

    return (
        <>
            <ul className="menu">
                {/* Menú de Home sin submenú */}
                <li className={`item ${checkCurrentMenuItem("/")}`}>
                    <Link href="/">Home</Link>
                </li>

                {/* Menú para About */}
                <li className={`item ${pathname === "/about" ? "active" : ""}`}>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </>
    )
}

