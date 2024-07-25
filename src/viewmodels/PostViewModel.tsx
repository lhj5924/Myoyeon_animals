import { useState, useEffect } from 'react';
import { Post } from '../models/Postmodel';
import { fetchPost } from '../services/ApiService';

export const usePostViewModel = (postId: number) => {
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadPost = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchPost(postId);
                setPost(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        loadPost();
    }, [postId]);

    return { post, loading, error };
};
