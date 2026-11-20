import React, { useState, useEffect } from 'react'
import './Pagination.css'
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";



const Pagination = ({ totalPost, postPerPage, onClick, currentPage }) => {

    let pages = []
    let TotalPage = Math.ceil(totalPost / postPerPage);

    const currentPageNumber = Number(currentPage);
    for (let i = 1; i <= TotalPage; i++) {
        pages.push(i)
    }

    // NEXT
    const next = () => {

        const newPage =
            currentPageNumber === TotalPage
                ? 1
                : currentPageNumber + 1

        onClick(newPage)
    }

    // PREVIOUS
    const prev = () => {

        const newPage =
            currentPageNumber === 1
                ? TotalPage
                : currentPageNumber - 1

        onClick(newPage)
    }

    return (
        <>
            <div className='align_center justify-center flex-row'>
                <button className=" p-3 rounded-full transition-all duration-300 cursor-pointer"
                    onClick={prev}>
                    <ChevronLeft />
                </button>
                <div >
                    <ul className='pagination align_center '>
                        {pages.map(page =>

                            <li key={page} 
                               >
                                <button
                                     
                                     className={`w-8 h-full rounded-full mx-3 duration-300 cursor-pointer 
                                      ${currentPageNumber === page ? 
                                      'bg-black text-cyan-50 w-10' : 'bg-amber-100 hover:bg-emerald-200'}`
                                      } 

                                    onClick={() => {
                                        onClick(page)
                                    }}>
                                    {page}
                                </button>
                            </li>
                        )
                        }
                    </ul>
                </div>



                <button className=" p-3 rounded-full transition-all duration-300 cursor-pointer"
                    onClick={next}>
                    <ChevronRight />
                </button>
            </div>

        </>

    )
}

export default Pagination