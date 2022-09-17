import React from 'react'
import Header from '../../components/header/Header'
import NewsList from '../../components/newsList/NewsList'
function NewsPage() {
  return (
    <div className='newspage__container'>
        <Header/>
        <NewsList/>
    </div>
  )
}

export default NewsPage