import { useState } from "react";
import Avatar from '../assets/Avatar.jpg';
import { useNavigate } from "react-router-dom";

function Navbar({ links, isOpenMobile, setIsOpenMobile, username, email, created }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openHeader, setOpenHeader] = useState(false);


    const navigate = useNavigate();

    function change () {
        setOpenHeader(!openHeader);
    }
    return (
        <>
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
                <div className="flex items-center space-x-4 relative">
                    
                    
                    <img
                        onClick={change}
                        src={Avatar}
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full"
                          aria-expanded={openHeader}
                    />
                    {openHeader && (<div className=" transition-transform duration-200 ease-out bg-slate-900 absolute right-0 md:-right-7 top-12 z-50 w-60 rounded-2xl shadow-lg border-none text-white p-2 " role="menu"
                                                      tabIndex="0" 
                    
                    >

                        <ul>
                          
                            <li className="inline-flex items-center w-full p-2 cursor-pointer hover:bg-slate-950"> 👤 {username}</li>
                            <li className="inline-flex items-center w-full p-2 cursor-pointer hover:bg-slate-950"> 📧 {email}</li>
                            <li  className="inline-flex items-center w-full p-2 cursor-pointer hover:bg-slate-950"> 🕒 {created}</li>
                            <li><button className="p-2.5 m-2 bg-slate-950 text-white rounded"  onClick={() => navigate("/profile")}>Edit Details</button></li>


                        </ul> </div>)}

                 


                    



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

           
                        </>
    );
}

export default Navbar;
