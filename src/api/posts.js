import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '35827866-cac2bfdbcf92b350627521ced',
    q: '',
    page: '1',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: '12',
  },
});

export const searchImages = (q, page) => {
  return instance.get('/', {
    params: { ...instance.defaults.params, q, page },
  });
};

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const API_KEY = '35827866-cac2bfdbcf92b350627521ced';

// export const searchImages = (q, page = 1) => {
//   return instance.get('/', {
//     params: {
//       key: '35827866-cac2bfdbcf92b350627521ced',
//       image_type: 'photo',
//       orientation: 'horizontal',
//       q,
//       per_page: 12,
//       page,
//     },
//   });
// };

// const instance = axios.create({
//   baseURL: 'https://pixabay.com/api',
//   params: {
//     key: '35827866-cac2bfdbcf92b350627521ced',
//     image_type: 'photo',
//     orientation: 'horizontal',
//   },
// });

// export const searchImages = (q, _page = 1) => {
//   return instance.get('/', {
//     params: {
//       q,
//       _limit: 12,
//       _page,
//     },
//   });
// };

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

// const apiKey = '35827866-cac2bfdbcf92b350627521ced';

// export const getAllPosts = () => {
//   const params = {
//     key: apiKey,
//   };

//   return instance.get('/', { params });
// };

// const instance = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com/posts',
// });

// export const getAllPosts = () => {
//   return instance.get('/');
// };

// const instance = axios.create({
//   baseURL:
//     'https://pixabay.com/api/?key=35827866-cac2bfdbcf92b350627521ced&image_type=photo&orientation=horizontal',
// });

// export const getAllPosts = () => {
//   return instance.get('/');
// };

// export const searchPosts = (q, page = 1) => {
//   return instance.get(`&q=${q}&per_page=12&page=${page}`);
// };

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '35827866-cac2bfdbcf92b350627521ced';
// const searchImages = async (query, page = 1) => {
//   try {
//     const response = await axios.get(
//       `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&per_page=12`
//     );
//     return response.data;
//   } catch (error) {
//     throw new Error('Error fetching images from Pixabay API');
//   }
// };

// export { searchImages };
