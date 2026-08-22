import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"
import LinkWithIcon from './LinkWithIcon';

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
            <nav className="navbar flex flex-row justify-between px-10 bg-[#fff] ">

                <div className='align_center gap-4'>
                    <h1 className="navbar_heading font-extrabold text-[32px] mr-[20px] "> CartWish</h1>

                    <form className='align_center navbar_form  '>
                        <input type="text" placeholder="Search..." className="navbar_search" />

                        <button type='submit' className='search_button'>click me </button>
                    </form>
                </div>

                <div className="flex flex-row items-center gap-4">
                    
                    <LinkWithIcon title="Home" link='/' emojee={'🚀'} />
                    <LinkWithIcon title="Product" link='/' emojee={'🧈'} />
                    <LinkWithIcon title="LogIn" link='/' emojee={'👏🏻'} />
                    <LinkWithIcon title="signUp" link='/' emojee={'✨'} />
                    <LinkWithIcon title="MyOrder" link='/' emojee={'💰'} />
                    <LinkWithIcon title="LogOut" link='/' emojee={'🔒'} />
                                      
                    <a href='/Cart' className="text-[15px] text-black hover:text-[#03195aa9]">
                        Cart
                        <p className='align-center cart_count'> 0 </p>
                    </a>

                </div>


            </nav>


        </>
    )
}

export default Navbar