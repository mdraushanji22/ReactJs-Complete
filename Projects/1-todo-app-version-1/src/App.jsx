import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import TodoItems1 from "./components/TodoItems1";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItems />
        <TodoItems1 />
      </div>
    </center>
  );
}

export default App;
