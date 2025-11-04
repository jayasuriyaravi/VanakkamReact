import { useState } from "react";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todoItem, setTodoItem] = useState([]);

  return (
    <div>
      <div>
        <input type="text" value={todoText}
        onChange=
        {(e) => {
          setTodoText(e.target.value);
        }}
        />
        <button
          onClick={() => {
            setTodoItem((i) => [...i, todoText]);
          }}
        >
          Add
        </button>
      </div>
       {todoItem.length > 0 ? todoItem.map((i) => {
        return <p>{i}</p>;
      }):""}
    </div>
  );
}

export default App;
