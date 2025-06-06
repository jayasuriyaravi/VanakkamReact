const content = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "first" }, "this is first box"),
    React.createElement("div", { id: "sec" }, "this is first box")
    ]);

const root = ReactDOM.createRoot(document.getElementById("root")); // creating the root to displaying all the element into the react dom

root.render(content);// convert the react object into the html elements 