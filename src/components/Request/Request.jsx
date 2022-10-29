import axios from 'axios';
import { useState } from 'react';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '29758121-e6e3453f02405b4aa1525a8f6';

const RequestImg = async (query, currentPage) => {
    // const [search, setSearch] = useState('');
    // const [page, setPage] = useState(1);

    const response = await axios.get('', {
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
