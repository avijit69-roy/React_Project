import React from 'react'

function FilterGroup({handleFilter, minRating ,Rating}) {
    return (
        <>
            <ul className='align-center gap-4 font-extrabold mx-3 align_center text-[16px]'>
                {
                    Rating.map((rate) => {
                        return (
                            <li className={`px-[5px] py-[10px] cursor-pointer ${minRating === rate ? 'text-[#ffe400]' : ''}`}
                                onClick={() => { handleFilter(rate) }}> {rate}+ Star
                            </li>
                    )}
                    )
                }
            </ul>       
        </>
    )
}

export default FilterGroup