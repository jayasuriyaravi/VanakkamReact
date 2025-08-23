import React from "react";
import ReactDom from "react-dom/client";

//this is the core react element creation
//this create an object which will be transpailed by the babel  and  rendered
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "iam back to the react"
);

//JSX is html like syntax  not an html inside the JS
//this is the normal react element
const jsxheading = <h2>this is the react element</h2>;

//react functional component

//need to use return while using the curly bracet
const HeadingComponent = () => {
  return (
    <div className="container">
      <h1>Vannakkam from the react application</h1>
    </div>
  );
};

//another react coomponent which we can directly return without the return keyword
const HeadingComponent2 = () => <h1>From the secoud component</h1>;

//this is component composition one component inside the onather component
const MultiComponent = () => {
  return (
    <div className="container">
      <HeadingComponent2></HeadingComponent2>
      {HeadingComponent()}        {/*    functional component is normal js funtion you can it in jsx  */}
      <h1>Vannakkam from the react application</h1>
      {jsxheading}
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<MultiComponent />);
