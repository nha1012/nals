import axios from "axios";

export const fetchBlogs = (page: number, searchValue: string, sortValue: string) => {
  const path = "https://5f55a98f39221c00167fb11a.mockapi.io/blogs";  
  if (searchValue) {
    return axios({
      method: "get",
      url: path,
      params:{
        search: `${searchValue}`,
      }
    });
  }
  return axios({
    method: "get",
    url: path,
    params:{
      page: page,
      limit: 4,
    }
  });
};

export const fetchBlogById = (id: number) => {
  const path = `https://5f55a98f39221c00167fb11a.mockapi.io/blogs/${id}`;  
  return axios({
    method: "get",
    url: path,
  });
};
