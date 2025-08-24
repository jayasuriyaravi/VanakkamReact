const Card = (props) => {
  const { rest } = props;

  const { costForTwo, cloudinaryImageId, avgRating, areaName, cuisines, name } =
    rest.info;
  //   const { name, cus, rating, time } = props;
  return (
    <div className="card-con">
      <img
        className="card-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <div className="card-details">
        <h2 className="card-head">{name}</h2>
        <div className="card-des">
          <p>{cuisines.join(" , ")}</p>
          <p>{areaName}</p>
          <p>{costForTwo}</p>
          <p>{avgRating}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
