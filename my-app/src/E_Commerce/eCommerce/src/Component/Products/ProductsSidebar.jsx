import React, { useState ,useEffect} from 'react'
import LinkWithIcon from '../Navbar/LinkWithIcon'
import { TruckElectric } from 'lucide-react'
import useData from '../../hooks/useData'

export const ProductsSidebar = () => {


// Here we are using the custom hook useData to fetch the categories from the API. The hook takes a URL as an argument and returns
//  the data and any error that may have occurred during the fetch operation.
const {data:categories,error} = useData("/category")



return (
    <>
        <aside className="products_sidebar py-[10px] px-[20px] rounded-[5px] bg-[#ffff]">
            <h2 className='text-[28px] mb-[10px]'>
                Category
            </h2>

            <div className='category_link'>

                 {error && <em className="form_error">{error} </em>}

                {categories !== null && categories.map(category => 
                        
                    <LinkWithIcon 
                    key={category._id}
                    id={category._id}
                    title={category.name}
                    link={`/products?category=${category.name}`} 
                    // emojee={'🚀'} 
                    emojee={`http://localhost:5000/category/${category.image}`}
                    sidebar={true} 
                    />
                     
                )}

                
            </div>
        </aside>
    </>
  )
}
