import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLinks1 } from '../../data/navlinks';
import logo from '../../images/Logo.svg';


const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleDropdownToggle = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="container xl:px-4 px-1">
            <nav className="bg-white p-6 flex items-center justify-center flex-wrap">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-[150px] h-[40px]"
                    />
                    <button
                        className="text-secondary-soft-blue md:hidden"
                        onClick={handleMobileMenuToggle}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>

                <div className={`w-full md:flex md:items-center md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'} ml-8`}>
                    <ul className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 font-poppins items-center justify-center md:justify-start">
                        {NavLinks1.map((navItem) => (
                            <li key={navItem.id} className="text-black relative">
                                {navItem.isDropDown ? (
                                    <div className="relative flex flex-col items-center md:items-center">
                                        <span
                                            className="cursor-pointer flex items-center"
                                            onClick={() => handleDropdownToggle(navItem.id)}
                                        >
                                            {navItem.link[0].title}
                                            <svg
                                                className="ml-1 w-4 h-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </span>
                                        <div
                                            className={`absolute left-0 mt-2 bg-secondary-soft-blue text-white rounded shadow-lg ${openDropdown === navItem.id ? 'block' : 'hidden'}`}
                                            style={{ top: '100%', zIndex: 10 }} // Ensure dropdown is positioned below the parent
                                        >
                                            {navItem.link.map((subLink, index) => (
                                                <Link
                                                    key={index}
                                                    to={subLink.path}
                                                    className="block px-4 py-2 text-white hover:text-black"
                                                >
                                                    {subLink.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link to={navItem.path} className="hover:text-secondary-easter-purple">{navItem.title}</Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0 font-poppins items-center justify-center md:justify-start ml-8">
                        <Link to="/login" className="text-secondary-soft-blue px-4 py-2 rounded mb-2 md:mb-0 md:mr-2">
                            Login
                        </Link>
                        <Link to="/sign-up" className="text-secondary-soft-blue border border-secondary-soft-blue px-4 py-2 rounded-lg hover:bg-secondary-soft-blue hover:text-white">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
