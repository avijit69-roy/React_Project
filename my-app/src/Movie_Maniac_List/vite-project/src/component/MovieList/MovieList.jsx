
import React, { useState, useEffect } from 'react'
import _ from "lodash";

import FilterGroup from './FilterGroup.jsx';
import MovieCard from "./MovieCard.jsx";
import axios from "axios";




const MovieList = ({ type, title }) => {

let P_url = `https://api.themoviedb.org/3/movie/${type}?api_key=7778c581cd0f8a031d817d81079c9ee6`
    const [movies, setmovies] = useState([]);
    const [minRating, setminRating] = useState(0);
    const [Loading, setLoading] = useState(false);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [Sort, setSort] = useState({
        by: "default",
        order: "asc"
    });

    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            let a_data = await axios.get(P_url);
            setmovies(a_data.data.results);
            setFilteredMovies(a_data.data.results);
            setLoading(false);
        }
        fetchData();
    }, [type]);



//Handle filter function to filter movies based on rating
    const handleFilter = (rating) => {
        if (rating == minRating) {
            setminRating(0);
            setFilteredMovies(movies);
            return;
        }
        setminRating(rating);
        const filterdMovie = movies.filter((movie) => {
            return movie.vote_average >= rating;
        })
        setFilteredMovies(filterdMovie);
    } 

//handleSort function to sort movies based on selected criteria
    useEffect(() => {
        if (Sort.by !== "default") {
            let sortMovies = _.orderBy(filteredMovies, [Sort.by], [Sort.order]);
            setFilteredMovies(sortMovies);
        }
    }, [Sort]);

    const handleSort = (e) => {
        const { name, value } = e.target;
        setSort((prev) => ({
            ...prev,
            [name]: value
        }));
    }


    if(Loading){
        return <div className='text-[30px] font-bold text-[#ffe400] text-center'>Loading...</div>
    }

    return (
        <>

            <section id={type} >
                {/* Header */}
                <header className='py-[10px] px-[30px] align_center justify-between mb-[5px]'>
            


                    <h2 className='text-[26px] font-bold text-[#ffe400]'>{title}{ }🔥</h2>

                    <div className='align_center '> 

                        <FilterGroup minRating={minRating} handleFilter={handleFilter} Rating={[8, 7, 6]} />

                        <select name="by"
                            className='font-bold border outline-amber-200  border-[2px] rounded-lg text-[15px] mx-[10px] h-[30px] px-[5px]'
                            onChange={handleSort}
                            value={Sort.by}
                        >
                            <option value="default" className='text-blue-600  text-shadow-black  font-extrabold'>SortBy </option>
                            <option value="release_date" className='text-blue-600  text-shadow-black  font-extrabold'>Date</option>
                            <option value="vote_average" className='text-blue-600  text-shadow-black  font-extrabold'>Rating</option>
                        </select>

                        <select name="order"
                            className='font-bold border  outline-amber-200 border-[2px] rounded-lg text-[15px] mx-[10px] h-[30px] px-[5px]'
                            onChange={handleSort}
                            value={Sort.order}
                        >
                            <option value="asc" className='text-blue-600  text-shadow-black  font-extrabold'> Accending </option>
                            <option value="desc" className='text-blue-600 text-shadow-black font-extrabold'> Decending</option>
                        </select>
                    </div>

                </header>

{/* 
                {
                    Loading ? <div className='text-[30px] font-bold text-[#ffe400] text-center'>Loading...</div> : null
                } */}


                {/* Movie Card list */}
                <div className='flex flex-wrap justify-center gap-[10px]'>

                    {
                        filteredMovies.map((movie) => {
                            return <MovieCard key={movie.id} movie={movie}  />
                        })
                    }

                </div>
            </section>
        </>
    )
}

export default MovieList