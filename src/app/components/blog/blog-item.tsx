import React from 'react'
import { Link } from 'react-router-dom'
import { BlogType } from '../../models/blog'

function BLogItem(props: {blogItem: BlogType}) {
  return (
    <Link className="blog" to={'blogs/'+props.blogItem.id}>
      <li className="media row blog-item">
        <div className="col-md-2">
          <img src={props.blogItem.image} className="mr-3 blog-image" alt="..." />
        </div>
        <div className="col-md-10">
          <div className="media-body">
            <h5 className="mt-0 mb-1">{props.blogItem.title}</h5>
            <p>{props.blogItem.content}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BLogItem
