import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '29758121-e6e3453f02405b4aa1525a8f6';

const RequestImg = async (search, page) => {
    const response = await axios.get('', {
        params: {
            key: API_KEY,
            q: search,
            page: page,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
        },
    });

    return response.data;
};

export default RequestImg;
