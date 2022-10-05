import { useState } from "react";
import { Link } from "react-router-dom"
import { NavItem } from "../interfaces/NavItem"

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems: NavItem[] = [];

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return <nav className="bg-white shadow-sm mb-4">
        <div className="container mx-auto">
            <div className="flex items-center justify-between font-semibold px-4 lg:px-2">
                {/* Brand */}
                <Link to="/" className="py-3">Treely</Link>

                {/* Primary menu */}
                <ul className="hidden md:flex items-center gap-1">
                    {navItems.length > 0 && navItems.map((x, i) => <li key={i}><Link to={x.to} className="py-3 px-2 text-gray-600 hover:text-gray-800">{x.text}</Link></li>)}
                </ul>

                {/* Toogle mobile menu */}
                <button className="flex md:hidden items-center text-gray-600 hover:text-gray-800" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </div>
        {/* Mobile menu */}
        <div className={`md:hidden bg-white absolute w-full h-full top-0 bottom-0 duration-500 ${isOpen ? 'left-0' : 'left-[-100%]'}`}>
            <ul className="flex flex-col items-center justify-center h-full">
                {navItems.length > 0 && navItems.map((x, i) => <li key={i}><Link to={x.to} className="block py-2 text-lg font-semibold text-gray-600 hover:text-gray-800">{x.text}</Link></li>)}
            </ul>

            {/* Close button */}
            <button className="absolute top-4 right-4" onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </nav>
}