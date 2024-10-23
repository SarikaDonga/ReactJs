const Review = ({ review }) => (
    <div className="review">
      <h4>{review.name}</h4>
      <p>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
      <p>{review.comment}</p>
      <hr />
    </div>
  );

  export default Review