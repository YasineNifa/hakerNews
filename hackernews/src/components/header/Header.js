import React from 'react'
import Headroom from "react-headroom"
import SyncIcon from "@mui/icons-material/Sync"
import "./Header.css"
function Header() {
  return (
    <Headroom>
        <header className='header'>
            <a href='/' className='logo'>
                <h1 className='logo__title'>HackerNews</h1>
            </a>
            <SyncIcon/>
        </header>
    </Headroom>
  )
}

export default Header