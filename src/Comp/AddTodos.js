import axios from "axios";
import { useForm } from "react-hook-form";

function AddTodos(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function addedFuc(e) {
    axios.post("/todo", { title: e.todos }).then(props.resetData());
  }

  function errorFuc(error) {
    console.log(error);
  }

  return (
    <>
      <form onSubmit={handleSubmit(addedFuc, errorFuc)}>
        <input type="text" {...register("todos", { require: "todo입력" })} />
        <button type="submit">등록</button>
      </form>
    </>
  );
}

export default AddTodos;
