const Review = ({ review }) => {
  const rating = Number(review.rating); 

  return (
    <div className="review">
      <h4>{review.name}</h4>
      <p>{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</p>
      <p>{review.comment}</p>
      <hr />
    </div>
  );
};

export default Review;
