import React, { useEffect, useState, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"
import LinkWithIcon from './LinkWithIcon';
import CartContext from '../../contexts/CartContext'
import { useNavigate } from 'react-router-dom';
import { getSuggestionsAPI } from '../../services/productServices';
import DataContext from '../../contexts/UserContext'
const Navbar = () => {

    const user = useContext(DataContext);
    const { cart, addToCart } = useContext(CartContext);
    const [search, setSearch] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedItem, setSelectedItem] = useState(-1);

    const Navigate = useNavigate();

    const [isScrolled, setIsScrolled] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        if (search.trim() !== "") {
            Navigate(`/products?search=${search.trim()}`)
        }
    }



    // DEBOUNCING: wait 300ms after the user stops typing, then call the API
            useEffect(() => {
                const delaySuggestion = setTimeout(() => {
                    if (search.trim() !== "") {
                        getSuggestionsAPI(search.trim())
                            .then((res) => {
                                setSuggestions(res.data);s
                            })
                            .catch((err) => {
                                console.error("Error fetching suggestions:", err);
                            });
                    } else {
                        setSuggestions([]);
                    }
                }, 300)

                // cancel the previous timer on every new keystroke
                return () => clearTimeout(delaySuggestion);

            }, [search])

    const handleKeydown = (e) => {

        if (selectedItem < suggestions.length) {
            if (e.key === 'ArrowDown') {
                setSelectedItem(current => current === suggestions.length - 1 ? 0 : current + 1);
            }
            else if (e.key === 'ArrowUp') {
                setSelectedItem(current => current === 0 ? suggestions.length - 1 : current - 1);
            }
            else if (e.key === 'Enter' && selectedItem > -1) {
                const suggestion = suggestions[selectedItem];
                Navigate(`/products?search=${suggestion.title}`);
                setSearch("");
                setSuggestions([]);
            }
        }
        else {
            setSelectedItem(-1);
        }

    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);

        // cleanup: remove the listener when the component unmounts
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className="navbar flex flex-row justify-between  px-10 bg-[#fff] ">

                <div className='align_center gap-4 '>
                    <h1 className="navbar_heading font-extrabold text-[32px] mr-[20px] "> CartWish</h1>

                    <form className='align_center navbar_form'
                        onSubmit={handleSubmit}
                    >
                        <input type="text" placeholder="Search..." className="navbar_search"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onKeyDown={handleKeydown}
                        />

                        <button type='submit' className='search_button'>click me </button>

                        {/** Display suggestions only when there are suggestions available and the search input is not empty */}
                        {suggestions.length > 0 && (
                            <ul className='search_result'>

                                {suggestions.map((suggest, index) => (
                                    <li className={selectedItem === index ?
                                        'search_suggestion_link active' :
                                        'search_suggestion_link'}

                                        key={suggest._id}>
                                        <Link
                                            to={`/products?search=${suggest.title}`}
                                            onClick={() => {
                                                setSearch('');
                                                setSuggestions([]);
                                            }}
                                        >
                                            {suggest.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}


                    </form>
                </div>

                <div className="flex flex-row items-center gap-4">

                    <LinkWithIcon title="Home" link='/' emojee={'🚀'} />
                    <LinkWithIcon title="Product" link='/products' emojee={'🧈'} />

                    {!user &&
                        <>
                            <LinkWithIcon title="LogIn" link='/login' emojee={'👏🏻'} />
                            <LinkWithIcon title="signUp" link='/signup' emojee={'✨'} />

                        </>

                    }

                    {user &&
                        <>

                            <LinkWithIcon title="MyOrder" link='/myorders' emojee={'💰'} />
                            <LinkWithIcon title="LogOut" link='/logout' emojee={'🔒'} />
                            <NavLink to='/Cart' activeStyle={{ fontWeight: 'bold', color: 'red' }} className="text-[15px] text-black hover:text-[#03195aa9]">
                                Cart
                                <p className='align-center cart_count'> {cart.length} </p>
                            </NavLink>

                        </>
                    }


                </div>


            </nav>


        </>
    )
}

export default Navbar