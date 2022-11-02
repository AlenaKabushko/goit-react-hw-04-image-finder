import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '29758121-e6e3453f02405b4aa1525a8f6';
const controller = new AbortController();

const RequestImg = async (query, currentPage) => {
    const response = await axios.get('', {
        signal: controller.signal,
        params: {
            key: API_KEY,
            q: query,
            page: currentPage,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
        },
    });

    return response.data;
};

export default RequestImg;
