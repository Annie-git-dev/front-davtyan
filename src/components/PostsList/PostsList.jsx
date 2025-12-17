import { useEffect, useState } from 'react';
import './PostsList.css';
import PostModal from '../PostModal/PostModal';
import useDebounce from '../../hooks/useDebounce';
import PostsPreload from '../Preload/PostsPreload';

export default function PostsList({ searchValue }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

  const debouncedSearch = useDebounce(searchValue, 300);

  useEffect(() => {
    fetch('https://cloud.codesupply.co/endpoint/react/data.json')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredPosts = posts.filter(
    post =>
      post.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      post.text.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  if (loading) return <PostsPreload />;

  return (
    <div className="posts-container">
      <div className="posts-flex">
        {filteredPosts.map((post, index) => (
          <div
            key={index}
            className="post-card"
            onClick={() => setSelectedPost(post)}
          >
            <img
              src={post.img}
              srcSet={`${post.img_2x} 2x`}
              alt={post.title}
              className="post-image"
            />
            <p className='post-tag'>{post.tags}</p>
            <h3>{post.title}</h3>
            <div className="post-desc">
              <p className="post-desc-details">
                <strong>{post.autor} </strong>
                &nbsp; &#x2022; &nbsp;{post.date} &nbsp; &#x2022; &nbsp; {post.views} views</p>
              <p className="post-desc-text">{post.text}</p>
            </div>
          </div>
        ))}
      </div>
      <PostModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </div>
  );
}