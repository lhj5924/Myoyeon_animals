import { Post } from '../models/Postmodel';

export const fetchPost = async (postId: number): Promise<Post> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch post');
    }
    return response.json();
};
