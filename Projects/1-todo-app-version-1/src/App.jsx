import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import TodoItems1 from "./components/TodoItems1";

function App() {
  return (
    <center class="items-container">
      <AppName />
      <AddTodo />
      <TodoItems />
      <TodoItems1 />
    </center>
  );
}

export default App;
