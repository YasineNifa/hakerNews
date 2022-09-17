import React from 'react'
import Headroom from "react-headroom"
import SyncIcon from "@mui/icons-material/Sync"
import "./Header.css"

function Header({refresh, handleRefresh}) {
    const handleClick = () => {
        handleRefresh(!refresh)
    }
    return (
        <Headroom>
            <header className='header'>
                <a href='/' className='logo'>
                    <h1 className='logo__title'>HackerNews</h1>
                </a>
                <SyncIcon style={{cursor:'pointer'}} onClick={handleClick}/>
            </header>
        </Headroom>
    )
}

export default Header