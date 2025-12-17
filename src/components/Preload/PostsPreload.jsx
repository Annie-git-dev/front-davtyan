import loadingPosts from '../Preload/PostsPreload';
import './PostsPreload.css';

export default function PostsPreload() {
    return (
        <div className="posts-preload">
            {Array.from({ length: loadingPosts }).map((_, index) => (
                <div key={index} className="post-card preload">
                    <div className="post-image preload-bg"></div>
                    <div className="post-tag preload-bg"></div>
                    <div className="post-title preload-bg"></div>
                    <div className="post-desc preload-bg"></div>
                </div>
            ))}
        </div>
    )
}
