import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import MovieList from './component/MovieList/MovieList'
import { Route, Routes } from 'react-router-dom'


function App() {


  return (
    <>
      <div className="min-h-screen py-20 flex flex-col gap-10">
        <Navbar />
        <Routes>
          <Route
            path="/popular"
            element={<MovieList type="popular" title="Popular" />}
          />
          <Route
            path="/"
            element={<MovieList type="popular" title="Popular" />}
          />
          <Route
            path="/top-rated"
            element={<MovieList type="top_rated" title="Top Rated" />}
          />
          <Route
            path="/upcoming"
            element={<MovieList type="upcoming" title="Upcoming" />}
          />
        </Routes>    
      </div>
    </>
  );
}


export default App;


