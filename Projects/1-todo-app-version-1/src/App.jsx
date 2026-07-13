import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems1 from "./components/TodoItems1";
import TodoItems2 from "./components/TodoItems2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItems1></TodoItems1>
        <TodoItems2></TodoItems2>
      </div>
    </center>
  );
}

export default App;