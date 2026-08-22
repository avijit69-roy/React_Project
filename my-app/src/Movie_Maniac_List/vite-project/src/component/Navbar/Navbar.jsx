import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
//import "./Navbar.css"

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll)
    }, []);


    return (
        <>

            <nav className=
                {
                    `fixed top-0 left-0 w-full z-50 
                            flex flex-row justify-between items-center py-0 px-[33px] border border-[#e6e6e6]

                            ${isScrolled
                        ? "bg-black/80 backdrop-blur-lg shadow-lg py-10 px-10"
                        : "bg-transparent py-6 px-8"}
                        `
                }
            >
                <h1 className="font-extrabold text-[30px] leading-[36px] text-[#ffe400]"> MovieManiac</h1>

                <div className="flex flex-row items-center gap-8">
                    <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `font-bold text-[25px] transition-colors ${
                            isActive
                                ? "text-[#ffe400]"
                                : "text-white hover:text-[#ffe400]"
                        }`
                    }
                >
                    Popular 🔥
                </NavLink>

                    <NavLink
                        to="/top-rated"
                        className={({ isActive }) =>
                            `font-bold text-[25px] transition-colors ${
                                isActive
                                    ? "text-[#ffe400]"
                                    : "text-white hover:text-[#ffe400]"
                            }`
                        }
                    >
                        TopRated ⭐
                    </NavLink>

                    <NavLink
                        to="/upcoming"
                        className={({ isActive }) =>
                            `font-bold text-[25px] transition-colors ${
                                isActive
                                    ? "text-[#ffe400]"
                                    : "text-white hover:text-[#ffe400]"
                            }`
                        }
                    >
                        upcoming 😎

                    </NavLink>   
                
                </div>
            </nav>


        </>
    )
}

export default Navbar