import React from 'react'

function Search() {
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Search"  aria-describedby="button-addon2" />
      <div className="input-group-append">
        <button className="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
      </div>
    </div>
  
  )
}

export default Search
