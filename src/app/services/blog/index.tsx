import axios from "axios";
const apiUrl = "https://5f55a98f39221c00167fb11a.mockapi.io/blogs"
export const fetchBlogs = (page: number, searchValue: string, sortValue: string) => {
  if (searchValue) {
    return axios({
      method: "get",
      url: apiUrl,
      params:{
        search: searchValue,
        sortBy: sortValue,
        order: 'desc'
      }
    });
  }
  return axios({
    method: "get",
    url: apiUrl,
    params:{
      page: page,
      limit: 4,
      filter: searchValue,
      sortBy: sortValue,
      order: 'desc'
    }
  });
};

export const fetchBlogById = (id: number) => {
  const path = `${apiUrl}/${id}`;  
  return axios({
    method: "get",
    url: path,
  });
};
