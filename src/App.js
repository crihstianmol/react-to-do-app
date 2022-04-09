import ToDoCounter from "./components/ToDoCounter";
import ToDoCreateButton from "./components/ToDoCreateButton";
import ToDoItem from "./components/ToDoItem";
import ToDoList from "./components/ToDoList";
import ToDoSearch from "./components/ToDoSearch";

function App() {
  return (
    <>
      <ToDoCounter/>
      <ToDoSearch/>
      <ToDoList>
        <ToDoItem/>
      </ToDoList>
      <ToDoCreateButton/>
    </>
  );
}

export default App;
