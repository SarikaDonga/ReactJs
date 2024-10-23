import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleAddComment = () => {
    const comment = {
      text: newComment,
      rating: rating,
      id: comments.length + 1,
    };
    setComments([...comments, comment]);
    setNewComment('');
    setRating(0);
  };

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>

      {/* Comments Section */}
      <h4>Leave a Review</h4>
      <input 
        type="text" 
        placeholder="Write your comment" 
        value={newComment} 
        onChange={(e) => setNewComment(e.target.value)} 
      />
      <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
        <option value={0}>Rating</option>
        <option value={1}>1 Star</option>
        <option value={2}>2 Stars</option>
        <option value={3}>3 Stars</option>
        <option value={4}>4 Stars</option>
        <option value={5}>5 Stars</option>
      </select>
      <button onClick={handleAddComment}>Add Comment</button>

      {/* Display Comments */}
      <h4>Reviews</h4>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} style={styles.comment}>
            <p>{comment.text}</p>
            <p>Rating: {comment.rating} Stars</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px',
    width: '250px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  comment: {
    borderTop: '1px solid #ccc',
    marginTop: '10px',
    paddingTop: '10px',
    fontSize: '14px',
  },
};

export default ProductCard;
