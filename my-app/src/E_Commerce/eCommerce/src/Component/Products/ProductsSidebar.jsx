import React, { useState ,useEffect} from 'react'
import LinkWithIcon from '../Navbar/LinkWithIcon'
import { TruckElectric } from 'lucide-react'
import apiClient from '../../utils/api-client'

export const ProductsSidebar = () => {

const [categories, setCategories] = useState([]);
const [error, setError] = useState("");

useEffect(() => {
  apiClient.get("/category")
  .then((res)=>{setCategories(res.data)})
  .catch((err) => {setError(err.message)})
}, [])


console.log (categories);


return (
    <>
        <aside className="products_sidebar py-[10px] px-[20px] rounded-[5px] bg-[#ffff]">
            <h2 className='text-[28px] mb-[10px]'>
                Category
            </h2>

            <div className='category_link'>

                 {error && <em className="form_error">{error} </em>}

                {categories.map(category => 
                        
                    <LinkWithIcon 
                    id={category._id}
                    title={category.name}
                    link={`products?category=${category.name}`} 
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
