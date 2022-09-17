import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewItem from '../newItem/NewItem';
import "./NewsList.css"

function NewsList({refresh}) {
    const [news, setNews] = useState([]);
    const [nbrPages, setNbrPages] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);

    const getData = async () => {
        try{
            const {data} = await axios.get(`https://hn.algolia.com/api/v1/search?&page=${currentPage}`);
            const {hits, nbPages} = data;
            setNews(hits);
            setNbrPages(nbPages);
        } catch(err){
            console.error(err.message);
        } finally{
            setIsLoading(false);
        }
    }

    const handlePrevious = () => {
        setCurrentPage(currentPage - 1)
    }

    const handleNext = () => {
        setCurrentPage(currentPage + 1)
    }

    const renderButtons = () => {
        if(currentPage === 0 ){
            return(
                <button className='button' onClick={handleNext}>More</button>
            )
        }else if(currentPage === nbrPages-1){
            return(
                <button className='button' onClick={handlePrevious}>Previous</button>
            )
        } else{
            return(
                <div className='button__container'>
                    <button className='button' onClick={handlePrevious}>Prev</button>
                    <button className='button' onClick={handleNext}>More</button>
                </div>
            )
        }
    }

    useEffect(() => {
        getData();
        const interval = setInterval(() => {
            getData();
        }, 30000);
        return () => clearInterval(interval);
    }, [currentPage, refresh])

    return (
        <>
            {
                isLoading ?
                (<p>Fetching Data ...</p>):
                (
                    <div className='list__container'>
                        <div>
                            {
                                news.map((item, index) => <NewItem article={item} key={item.objectID} itemIndex={(currentPage * 20) + (index+1)} /> )
                            }
                        </div>
                        <div>{renderButtons()}</div>

                    </div>
                )
            }
        </>
    )
}

export default NewsList