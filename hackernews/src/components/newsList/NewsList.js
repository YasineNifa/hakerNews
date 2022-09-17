import React, { useEffect, useState } from 'react'
import NewItem from '../newItem/NewItem';
import "./NewsList.css"
import { getHackerNewsPerPage } from '../../services/hackerNewsApi';
import Navigation from '../navigation/Navigation';

function NewsList({refresh}) {
    const [news, setNews] = useState([]);
    const [nbrPages, setNbrPages] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);

    const getData = () => {
        getHackerNewsPerPage(currentPage)
        .then(res => {
            const {hits, nbPages} = res.data
            setNews(hits)
            setNbrPages(nbPages)
        })
        .catch(err=>{
            console.error(err.message)
        })
        .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        getData()
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
                        <Navigation currentPage={currentPage} nbrPages={nbrPages} handleChange={setCurrentPage} />
                    </div>
                )
            }
        </>
    )
}

export default NewsList