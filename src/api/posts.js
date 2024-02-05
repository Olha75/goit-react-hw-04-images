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
