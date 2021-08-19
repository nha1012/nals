import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {sort} from '../../reducres/sort';

function Sort(props: any) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen);
  const menuClass = `dropdown-menu${isOpen ? " show" : ""}`;
  const dispatch = useDispatch();
  const sortHandle = () =>{
    const dispatchSort = sort('sortBy=createdAt&order=desc');
    dispatch(dispatchSort)
  }
  return (
    <div className="dropdown" onClick={toggleOpen}>
    <button
      className="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
    >
      Sort
    </button>
    <div className={menuClass} aria-labelledby="dropdownMenuButton">
      <button className="dropdown-item" onClick={sortHandle}>
        New
      </button>
    </div>
  </div>
  )
}

export default withRouter(Sort)
