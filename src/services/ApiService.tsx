import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_DECODING_KEY;

export const fetchAnimals = async (params: any) => {
  try {
    const response = await axios.get(`${BASE_URL}/abandonmentPublic`, {
      params: {
        ...params,
        serviceKey: API_KEY,
        _type: 'json',
      },
    });
    console.log(response.data); // 응답 데이터 로그 출력
    return response.data.response.body.items.item;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};
