import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../../reducres/search';
import { withRouter } from 'react-router-dom';

function Search(props: any) {
  const dispatch = useDispatch();
  const [valueSearch, setValueSearch] = useState<string>('');

  const handleSearch=()=>{
    const searchDispatch = search(valueSearch);
    dispatch(searchDispatch);
    return props.history.push(`?search=${valueSearch}`)
  }
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Search"  aria-describedby="button-addon2" onChange={(e)=> setValueSearch(e.target.value)}/>
      <div className="input-group-append">
        <button className="btn btn-outline-primary" type="button" id="button-addon2" onClick={handleSearch}>Search</button>
      </div>
    </div>
  )
}

export default withRouter(Search)
