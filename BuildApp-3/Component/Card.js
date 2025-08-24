// this card component for normal props
//we  directly destructure where we want and also we destructure at the starting also

const Card = (props) => {
  {
    /* props is the object wrapped the all the argument and send as object*/
  }

  const { name, cus, rating, time } = props;
  return (
    <div className="card-con">
      <img
        className="card-img"
        src="https://img.pikbest.com/png-images/20240907/top-fast-food-logo-designs-that-capture-attention-in-2024_10813950.png!w700wp"
      ></img>
      <div className="card-details">
        <h2 className="card-head">{name}</h2>
        {/*in this line we use already destuctured prop*/}
        <div className="card-des">
          <p>{props.cus}</p>
          <p>{props.rating}</p>
          <p>{props.time}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
