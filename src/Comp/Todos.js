import { useEffect, useState } from "react";
import axios from "axios";
import Fuck from "./Suck";
import AddTodos from "./AddTodos";

function Todos() {
  const [Todo, SetTodo] = useState([]);

  async function resetData() {
    await axios.get("/todo").then((res) => {
      SetTodo(res.data.DBdata);
    });
  }

  useEffect(() => {
    resetData();
  }, []);

  return (
    <>
      <AddTodos resetData={resetData} />
      <Fuck DBdata={Todo} resetData={resetData}></Fuck>
    </>
  );
}

export default Todos;
