// import Card from "./Card";
import Card from "./Cardsapi.js";
import data from "./data.json";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">
        <h4>search......</h4>
      </div>
      <div className="rest">

        {/*props are normal argument to the function here we are padding the four argument to the funtion as hard coding*/}

        {/* <Card name="megana" cus="biryani" rating="4.3" time="36" />
        <Card name="kfcc" cus="burger" rating="4.3" time="36" />
        <Card name="suriya" cus="poratta" rating="4.3" time="36" />
        <Card name="chinese" cus="noodles" rating="4.3" time="36" /> */}

        {/* these card are using the realtime json data from the api */}

        {data.map((rest, index) => (
          <Card key={index} rest={rest} />
        ))}

      </div>
    </div>
  );
};

export default Body;
