import React, { useEffect, useState } from 'react';
import { BlogType } from '../../models/blog';
import { fetchBlogById } from '../../services/blog';
function BlogDetails(props: any) {
  const id = props.match.params.id;
  const [blog, setBlog] = useState<BlogType>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBlogById(id)
      setBlog(result.data);
    };
    fetchData();
  }, []); 

  return (
    <div className="row">
      <div className="media row ">
        <div className="col-md-7">
          <img src={blog?.image} className="mr-3 " alt="..." />
        </div>
        <div className="col-md-5">
          <div className="media-body">
            <h5 className="mt-0 mb-1">{blog?.title}</h5>
            <p>{blog?.content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails
