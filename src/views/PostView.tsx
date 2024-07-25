import React from 'react';
import { usePostViewModel } from '../viewmodels/PostViewModel';

interface PostViewProps {
    postId: number;
}

const PostView: React.FC<PostViewProps> = ({ postId }) => {
    const { post, loading, error } = usePostViewModel(postId);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
        </div>
    );
};

export default PostView;
