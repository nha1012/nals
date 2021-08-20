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
    if (props.location.search) {
      const dispatchSort = sort('createdAt');
      dispatch(dispatchSort)
      return props.history.push(`${props.location.search}&sortBy=createdAt&order=desc`)
    }
    const dispatchSort = sort('createdAt');
    dispatch(dispatchSort)
    return props.history.push(`?sortBy=createdAt&order=desc`)

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
