import React from 'react'
import './LinkWithIcon.css'
const LinkWithIcon = ({title,link,emojee}) => {
    return (

    <>
    
            <a href={link} className="text-[15px] text-black font-bold active:scale-95
                    hover:text-[#102258a9]">{title} 
                <span className="font-['Segoe_UI_Emoji']">{emojee}</span>
            </a>
    
    </>

    )
}

export default LinkWithIcon