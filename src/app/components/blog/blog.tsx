import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import BLogItem from './blog-item';
import './style.css'
import Pagination from '../pagination';
import Search from '../search/search';
import Sort from '../sort';
function Blog() {
  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <Search/>
        </div>
        <div className="col-md-4">
          <Sort/>
        </div>
      </div>

      <ul className="list-unstyled mt-3">
        <BLogItem/>
        <BLogItem/>
        <BLogItem/>
        <BLogItem/>
      </ul>
      <Pagination/>
    </div>

  )
}

export default Blog
