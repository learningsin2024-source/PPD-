import { useState } from "react";
import Avatar from '../assets/Avatar.jpg';

function Navbar({ links, isOpenMobile, setIsOpenMobile }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav
            className="w-full bg-slate-950 z-20 top-0 start-0 border-b border-gray-700"
            aria-label="Main Navigation"
        >
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center p-4 text-white">
                {/* Logo */}
                <div className="text-xl font-bold">
                   PPD
                </div>

                {/* Desktop Links */}
                <ul className="hidden md:flex space-x-6">
                    {links.map((link) => (
                        <li
                            key={link.key }
                            className="cursor-pointer hover:text-blue-400 hover:underline"
                        >
                            {link.name}
                        </li>
                    ))}
                </ul>

                {/* Avatar  */}
                <div className="flex items-center space-x-4">
                    
                    
                    <img
                        src={Avatar}
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full"
                    />
                    {/* Hamburger Button (Mobile Only) */}
                    <button
                        className="md:hidden p-2 text-2xl "
                        type="button"
                        aria-label="Toggle Menu"
                        aria-expanded={isMenuOpen}
                     onClick={() => {
                                       setIsMenuOpen(!isMenuOpen);
                                     setIsOpenMobile(!isOpenMobile);
                                                            }}
                                                            >
                                                    
                        ☰
                    </button>
                </div>
            </div>

    
        </nav>
    );
}

export default Navbar;
