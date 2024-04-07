import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

const entity = `users/`;

const getAll = async () => {
  const response = await axiosInstance.get(entity);
  return response.data;
};

const get = async (id) => {
  const response = await axiosInstance.get(`${entity}${id}`);
  return response.data;
};

const PostService = {
  getAll,
  get,
};

export default PostService;
