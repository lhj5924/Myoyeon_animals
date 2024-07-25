import React, { useState } from 'react';
import PostView from './views/PostView';

const App: React.FC = () => {
    const [postId, setPostId] = useState<number>(1);

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { name } = event.currentTarget;

        if (name === 'prev' && postId > 1) {
            setPostId(postId - 1);
        } else if (name === 'next') {
            setPostId(postId + 1);
        }
    };

    return (
        <div>
            <h1>Post Viewer</h1>
            <PostView postId={postId} />
            <button name="prev" onClick={handleButtonClick} disabled={postId === 1}>Previous Post</button>
            <button name="next" onClick={handleButtonClick}>Next Post</button>
        </div>
    );
};

export default App;
