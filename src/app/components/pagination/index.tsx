import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NumberParam, useQueryParam } from 'use-query-params';
import { next, pre, addPage, getCurrentPage } from '../../reducres/pagination';
import './style.css'
function Pagination(props: any) {
  
  const currentPage = useSelector(getCurrentPage).currentPage;
  const loading = useSelector(getCurrentPage).loading;
  const disabledNext = useSelector(getCurrentPage).disabledNext;  
  const [page, setPage] = useQueryParam('page', NumberParam);
  const dispatch = useDispatch();

  const nextClickHandle = ()=>{
    const nextDispatch = next();
    dispatch(nextDispatch);
    props.history.push(`?page=${currentPage+1}`)
  }

  const preClickHandle = ()=>{
    const preDispatch = pre();
    const newCurrentPage = currentPage-1;
    if (currentPage!==1) {
      dispatch(preDispatch);
      props.history.push(`?page=${newCurrentPage}`)
    }
    return;
  }

  useEffect(()=>{
    if (page) {
      const addPageDispatch = addPage(page);
      dispatch(addPageDispatch);
    }
  })

  return (
    <div className="pagination-cpn float-left">
      <nav aria-label="...">
        <ul className="pagination justify-content-end">
          <li className="page-item">
            <button className="page-link" disabled={currentPage === 1||loading ? true: false} tabIndex={-1} onClick={preClickHandle}> 
            Previous</button>
          </li>
          <li className="page-item">
            <button className="page-link" disabled={disabledNext || loading ? true: false} onClick={nextClickHandle}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default withRouter (Pagination);
