import axios from "axios";
import { useEffect, useState } from "react";

function Fuck(props) {
  const [Todo, SetTodo] = useState("");
  const [readonly, SetReadonly] = useState(true);

  function DelTodo(value) {
    axios.delete("/todo", { data: { id: value } }).then(() => {
      props.resetData();
    });
  }

  function checkTodos(value, checked) {
    axios.post("/todo2", { id: value, checked: checked });
  }

  const falseFunc = () => {
    SetReadonly(false);
  };

  const editTodoFunc = (e) => {
    SetTodo(...Todo, e);
    e = Todo;
  };

  function ModifyTodo(value, title) {
    axios.post("/todo", { id: value, title: title });
  }

  return (
    <ul>
      {props.DBdata.map((value) => {
        return (
          <li key={value.id}>
            <div>
              <input
                type="checkbox"
                defaultChecked={value.done}
                onChange={(e) => {
                  checkTodos(value.id, e.target.checked);
                }}
              />

              <label>
                <input
                  type="text"
                  value={value.title}
                  readOnly={falseFunc}
                  onChange={(e) => editTodoFunc(e.target.value)}
                ></input>
              </label>
              <button
                onClick={() => {
                  DelTodo(value.id);
                }}
              >
                Del
              </button>
              <button
                onClick={() => {
                  ModifyTodo(value.id);
                }}
              >
                수정
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Fuck;
