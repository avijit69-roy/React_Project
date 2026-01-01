import React from 'react'

const Header1 = (props) => {

    const LogoutUser = () => {
        localStorage.setItem("loggedInUser", "");
     
        // To change the user state in App.jsx,without reloading the page
        props.changeUser("");
        //This process can be used to reload the page after logout
          // window.location.reload();
    }

    return (
        <div className=' flex item-end justify-between'>
            <h1 className='text-2xl font-bold text-white items-center'>Hello <br />
                <span className='text-5xl'>{props.data?.firstName || "Admin"} 🎉</span>
            </h1>
            <button
                onClick={LogoutUser}
                className='bg-red-600 px-5 py-2 text-2xl font-medium text-white not-first:rounded-lg m-2 active:scale-95'>
                Logout
            </button>
        </div>
    )
}


export default Header1