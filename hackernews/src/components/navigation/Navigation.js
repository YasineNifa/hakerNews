import React from 'react'
import "./Navigation.css"

function Navigation({currentPage, nbrPages, handleChange}) {
    
    const handlePrevious = () => {
        handleChange(currentPage - 1)
    }

    const handleNext = () => {
        handleChange(currentPage + 1)
    }

    return (
        <div>
            {
                currentPage === 0 ?
                (
                    <button className='button' onClick={handleNext}>More</button>
                ) :
                currentPage === nbrPages-1 ?
                (
                    <button className='button' onClick={handlePrevious}>Previous</button>
                ) :
                (
                    <div className='button__container'>
                        <button className='button' onClick={handlePrevious}>Prev</button>
                        <button className='button' onClick={handleNext}>More</button>
                    </div>
                )
            }
        </div>
    )
}
export default Navigation