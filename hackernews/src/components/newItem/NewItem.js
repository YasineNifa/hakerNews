import React from 'react'
import { diffTime } from '../../helpers/utils'
import './NewItem.css'
function NewItem({article,itemIndex}) {
    return (
        <div className='new__container'>
            <div className='new__data'>
                <span className='new__title'><span className='new__index'>{itemIndex}.</span> {article.title}</span>
                <a className='new__url' href={article.url}>{article.url && article.url}</a>
            </div>
            <div className='new__metadata'>
                <span>{article.points} points</span>
                <span className='metadata__element'> By <span className='metadata__value'>{article.author}</span></span>
                <span className='metadata__element'> {diffTime(article.created_at)} | </span>
                <span className='metadata__value'> {article.num_comments} comments</span>
            </div>
        </div>
    )
}

export default NewItem