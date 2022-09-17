import React, {useState} from 'react'
import Header from '../../components/header/Header'
import NewsList from '../../components/newsList/NewsList'
import './NewsPage.css';

function NewsPage() {
    const [refresh, setRefresh] = useState(false);

    return (
        <div className='newspage__container'>
            <Header refresh={refresh} handleRefresh={setRefresh}/>
            <NewsList refresh={refresh}/>
        </div>
    )
}

export default NewsPage