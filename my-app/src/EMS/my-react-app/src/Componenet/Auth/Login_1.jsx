import React, { useState } from 'react'




const Login_1 = ({handleLogin}) => {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    
    function SubmitHandeler(e) {
        e.preventDefault();
        
        // console.log(`user: ${Email} and ${Password} loggged in successfully!`);
        handleLogin(Email,Password);
  
        setEmail("");
        setPassword("");       
    }

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='border-3 rounded-4xl border-emerald-600 p-20'>
                <form onSubmit={(e) => SubmitHandeler(e)} className='flex flex-col items-center justify-center p-4 gap-4'>
                    <input required
                        value={Email}
                        onChange={(e) => {setEmail(e.target.value)}}
                        className='text-white bg-transparent rounded-4xl border-2  border-emerald-600 w-80 text-xl px-2 py-4  outline-none' type='email' placeholder='Enter your email' />
                    <input required 
                        value={Password}
                        onChange={(e) => {setPassword(e.target.value)}}
                        className='text-white bg-transparent rounded-4xl border-2  border-emerald-600 w-80 text-xl px-2 py-4 outline-none' type='Password' placeholder='Enter Password' />
                    <button className='bg-green-600 text-white rounded-xl mt-4 text-xl px-4 py-2 w-50 hover:bg-green-800'>Login</button>
                </form>
            </div>

        </div>
    )
}


export default Login_1