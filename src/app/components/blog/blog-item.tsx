import React from 'react'
import { Link } from 'react-router-dom'

function BLogItem() {
  return (
    <Link className="blog" to="blogs/1">
      <li className="media row blog-item">
        <div className="col-md-2">
          <img src="https://images.unsplash.com/photo-1629178465208-8ddc83bdba43?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" className="mr-3 blog-image" alt="..." />
        </div>
        <div className="col-md-10">
          <div className="media-body">
            <h5 className="mt-0 mb-1">List-based media object</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </div>
      </li>
      </Link>

  )
}

export default BLogItem
