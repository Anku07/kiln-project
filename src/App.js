import { TodoProvider } from "./context/TodoConext";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import Navbar from "./Navbar/Navbar.js";

const App = () => {
  return (
    <>
    <Navbar />
      <TodoProvider>
        <div className="max-w-2xl mx-auto p-4 background ">
          <TaskForm />
          <TaskList />
        </div>
      </TodoProvider>
    </>
  );
};

export default App;
