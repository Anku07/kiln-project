import { Button } from "@mui/material";
import { Input } from "@mui/material";
import { Check, Edit2, Trash2 } from "lucide-react";
import { useTodo } from "../context/TodoConext";
import { TOGGLE_TASK, DELETE_TASK } from "../context/TodoConext";

export const TaskItem = ({
  task,
  isEditing,
  onEdit,
  editForm,
  setEditForm,
  onSave,
  onCancel,
}) => {
  const { dispatch } = useTodo();

  return (
    <div className="p-4">
      {isEditing ? (
        <div className="space-y-2">
          <Input
            value={editForm.title}
            onChange={(e) =>
              setEditForm({ ...editForm, title: e.target.value })
            }
          />
          <Input
            value={editForm.description}
            onChange={(e) =>
              setEditForm({ ...editForm, description: e.target.value })
            }
          />
          <Input
            type="date"
            value={editForm.date}
            onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
          />
          <div className="flex gap-2">
            <Button onClick={onSave} className="bg-green-500">
              Save
            </Button>
            <Button onClick={onCancel} className="bg-gray-500">
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <div
            className={`flex-1 ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <h3 className="font-semibold">{task.title}</h3>
            <p className="text-sm text-gray-600">{task.description}</p>
            <p className="text-xs text-gray-500">{task.date}</p>
          </div>
          <div className="flex gap-2">
            {!task.completed && (
              <Button
                onClick={() =>
                  dispatch({ type: TOGGLE_TASK, payload: task.id })
                }
                className="bg-green-500"
              >
                <Check size={16} />
              </Button>
            )}
            <Button onClick={() => onEdit(task)} className="bg-blue-500">
              <Edit2 size={16} />
            </Button>
            <Button
              onClick={() => dispatch({ type: DELETE_TASK, payload: task.id })}
              className="bg-red-500"
            >
              <Trash2 size={16} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
