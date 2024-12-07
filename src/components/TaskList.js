import { useState } from "react";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import { useTodo } from "../context/TodoConext";
import { TaskItem } from "./TaskItem";
import { EDIT_TASK } from "../context/TodoConext";

export const TaskList = () => {
  const { state: tasks, dispatch } = useTodo();
  const [filter, setFilter] = useState("ALL");
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const filteredTasks = tasks.filter((task) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const taskDate = new Date(task.date);

    switch (filter) {
      case "COMPLETED":
        return task.completed;
      case "PENDING":
        return !task.completed;
      case "OVERDUE":
        return !task.completed && taskDate < today;
      default:
        return true;
    }
  });

  const handleEdit = (task) => {
    setEditingId(task.id);
    setEditForm(task);
  };

  const saveEdit = () => {
    dispatch({ type: EDIT_TASK, payload: editForm });
    setEditingId(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2 mb-4">
        {["ALL", "COMPLETED", "PENDING"].map((filterOption) => (
          <Button
            key={filterOption}
            onClick={() => setFilter(filterOption)}
            className={`${
              filter === filterOption
                ? "bg-blue-500"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {filterOption}
          </Button>
        ))}
      </div>

      {filteredTasks.map((task) => (
        <Card key={task.id}>
          <TaskItem
            task={task}
            isEditing={editingId === task.id}
            onEdit={handleEdit}
            editForm={editForm}
            setEditForm={setEditForm}
            onSave={saveEdit}
            onCancel={() => setEditingId(null)}
          />
        </Card>
      ))}
    </div>
  );
};
