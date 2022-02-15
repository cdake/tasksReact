import { useState } from "react";
import Input from "./components/Inputs";
import Tasks from "./components/Tasks";

export default function App() {
  const [list, setList] = useState([]);

  const addToList = (input) => {
    if (input.text) {
      setList([...list, input]);
    } else {
      alert("Please enter task text");
    }
  };

  const removeItem = (id) => {
    const newArr = list.filter((el) => el.id !== id);
    setList(newArr);
  };

  const checkItem = (el, event) => {
    let checked = event.target.checked;
    const someArr = list.map((elem) => {
      if (elem.id === el.id) {
        elem.status = checked;
      }
      return elem;
    });
    setList(someArr);
  };

  return (
    <div className="App">
      <Input addToList={addToList} />
      <Tasks checkSomeItem={checkItem} removeItem={removeItem} list={list} />
    </div>
  );
}
