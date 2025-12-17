import './PostModal.css';
import Close from '../../assets/icons/close.png';

export default function PostModal({ post, onClose }) {
  if (!post) return null;

  const handleOverlayClick = e => {
    if (e.target.classList.contains('post-modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="post-modal-overlay" onClick={handleOverlayClick}>
      <div className="post-modal">
        <button className="post-modal-close" onClick={onClose}>
          <img src={Close} alt="Close" />
        </button>

        <img
          src={post.img}
          srcSet={`${post.img_2x} 2x`}
          alt={post.title}
          className="post-modal-image"
        />

        <p className="post-modal-tag">{post.tags}</p>
        <h2 className="post-modal-title">{post.title}</h2>

        <p className="post-modal-meta">
          <strong>{post.autor}</strong>
          &nbsp;•&nbsp;{post.date}
          &nbsp;•&nbsp;{post.views} views
        </p>

        <p className="post-modal-text">{post.text}</p>
      </div>
    </div>
  );
}
