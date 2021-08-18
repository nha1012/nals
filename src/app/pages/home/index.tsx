import React from 'react';
import Blog from '../../components/blog/blog';
import Pagination from '../../components/pagination';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import BlogDetails from '../../components/blog/details';

function Home() {
  return (
    <div>
      <Route path="/" exact component={Blog} />
      <Route path="/blogs/:id" exact component={BlogDetails} />
    </div>
  )
}

export default Home
