import { useState } from "react";
import Review from './Review'
const CommentSection = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || rating === 0 || !comment) {
      setError('Please fill in all fields.');
      return;
    }

    // Add the review
    const newReview = {
      name: '',
      rating: '',
      comment: ''
    };
    setReviews([...reviews, newReview]);

    // clear
    setName('');
    setRating(0);
    setComment('');
    setError('');
  };

  return (
    <div className="comment-section">
      <h2>Leave a Review</h2>

      {/* Review Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="form-control"
          >
            <option value="0">Select Rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="form-control"
          ></textarea>
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit" className="btn btn-primary">Submit Review</button>
      </form>

      {/* Display  */}
      <div className="reviews">
        <h3>Reviews</h3>
        {reviews.length > 0 ? (
          reviews.map((review, index) =>
            <Review key={index} review={review} />


          )
        ) : (
          <p>No reviews yet. Be the first to review!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;