import { useEffect, useState } from 'react';

const Async = () => {
    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()
                setPosts(posts);

    }, []);

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Async;