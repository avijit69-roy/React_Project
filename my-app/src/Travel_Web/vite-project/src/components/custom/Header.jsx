import { Button } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <div className='py-3 shadow-sm flex justify-between items-center px-3'>
        <img src="/logo.svg" alt="Logo" ></img>
        <div>
            <Button variant="contained" color="primary" href="/">Sign in</Button>
        </div>
    </div>
  )
}

export default Header