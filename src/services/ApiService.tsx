import { Post } from '../models/Postmodel';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_DECODING_KEY;

export const fetchPost = async (postId: number): Promise<Post> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  return response.json();
};

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
