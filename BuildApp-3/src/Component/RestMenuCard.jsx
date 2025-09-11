function RestMenuCard({ items }) {
const{info} = items.card
  const { name,defaultPrice , ratings } = info;
  const { rating, ratingCountV2 } = ratings.aggregatedRating;
  return (
    <div className="menu-card">
      <h3 className="menu-name">{name}</h3>
      <p className="menu-price">₹{defaultPrice / 100}</p>
      <p className="menu-rating">{rating + " (" + ratingCountV2 + ") "}</p>
    </div>
  );
}

export default RestMenuCard;
