import React from 'react'
import './LinkWithIcon.css'
import { Link, NavLink } from 'react-router-dom';
const LinkWithIcon = ({title,link,emojee,sidebar}) => {
    return (
    <>
    
            <NavLink to={link} className={sidebar ? 'align_center sidebar_link text-[15px] text-black font-bold active:scale-95 hover:text-[#102258a9]' : 
                'align_center text-[15px] text-black font-bold active:scale-95 hover:text-[#102258a9]'
            } >
                        
                {title} 
                <span className="font-['Segoe_UI_Emoji']">
                    
                    {sidebar ? <img src={emojee} alt="category" className='category_emojee' />: emojee }
                  
                </span>
            </NavLink>
    
    </>

    )
}

export default LinkWithIcon