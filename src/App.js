import { TodoProvider } from "./context/TodoConext";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

const App = () => {
  return (
    <TodoProvider>
      <div className="max-w-2xl mx-auto p-4">
        <TaskForm />
        <TaskList />
      </div>
    </TodoProvider>
  );
};

export default App;
