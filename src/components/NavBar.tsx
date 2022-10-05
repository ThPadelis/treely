import { useState } from "react";
import { Link } from "react-router-dom"
import { NavItem } from "../interfaces/NavItem"

/**
 * Navigation component
 * This component includes all the available routes inside the application
 * @returns The NavBar component
 */
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
                <Link to="/" className="py-3 font-mono">Treely</Link>

                {/* Primary menu */}
                <ul className="hidden md:flex items-center gap-1">
                    {navItems.length > 0 && navItems.map((x, i) => <li key={i}><Link to={x.to} className="py-3 px-2 text-gray-600 hover:text-gray-800">{x.text}</Link></li>)}
                    <li>
                        <a href="https://github.com/ThPadelis/treely" target="_blank" rel="noreferrer" className="inline-block px-2 text-gray-600 hover:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://pantelis.theodosiou.me" target="_blank" rel="noreferrer" className="inline-block px-2 text-gray-600 hover:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </a>
                    </li>
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
                <li>
                    <a href="https://github.com/ThPadelis/treely" target="_blank" rel="noreferrer" className="px-2 text-gray-600 hover:text-gray-800 my-1 flex items-center justify-start text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                        </svg>
                        <span>GitHub</span>
                    </a>
                </li>
                <li>
                    <a href="https://pantelis.theodosiou.me" target="_blank" rel="noreferrer" className="px-2 text-gray-600 hover:text-gray-800 my-1 flex items-center justify-start text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <span>Portfolio</span>
                    </a>
                </li>
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