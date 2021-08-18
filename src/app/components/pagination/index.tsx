import React from 'react'
import './style.css'
function Pagination() {
  return (
    <div className="pagination-cpn float-left">
      <nav aria-label="...">
        <ul className="pagination justify-content-end">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item active" aria-current="page">
            <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
          </li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
