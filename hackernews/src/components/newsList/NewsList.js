import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewItem from '../newItem/NewItem';

function NewsList() {
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

    useEffect(() => {
        getData();
    }, [])

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

                    </div>
                )
            }
        </>
    )
}

export default NewsList