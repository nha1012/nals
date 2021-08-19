import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import BLogItem from './blog-item';
import './style.css'
import Pagination from '../pagination';
import Search from '../search/search';
import Sort from '../sort';
import { fetchBlogs } from '../../services/blog';
import { getCurrentPage, startLoading, endLoading } from '../../reducres/pagination';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { getSearch } from '../../reducres/search';
import { getSort } from '../../reducres/sort';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const dispatch = useDispatch();
  const currentPage = useSelector(getCurrentPage).currentPage;
  const loading = useSelector(getCurrentPage).loading;
  const searchValue = useSelector(getSearch).searchValue;
  const sortValue = useSelector(getSort).sortValue;
  
  useEffect(() => {
    const startLoadingDispatch = startLoading();
    dispatch(startLoadingDispatch);
    const fetchData = async () => {
      const result = await fetchBlogs(currentPage, searchValue, sortValue);
      setBlogs(result.data);

      const endLoadingDispatch = endLoading();
      dispatch(endLoadingDispatch);
    };
    fetchData();
    
  }, [currentPage, searchValue, sortValue]); 
  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-md-8">
          <Search/>
        </div>
        <div className="col-md-4">
          <Sort/>
        </div>
      </div>
      {loading?
        <div className="loader">
          <Spinner as="span"
            animation="grow"
            role="status"
            variant="light"
            aria-hidden="true"/>
        </div>:''}
      <ul className="list-unstyled mt-3">
        {blogs.map((value, index)=>{
          return <BLogItem blogItem={value}/>
        })}
      </ul>
      <Pagination />
    </div>

  )
}

export default Blog
