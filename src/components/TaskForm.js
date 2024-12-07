import { useState } from "react";
import { Card, CardContent } from "@mui/material";
import { Input } from "@mui/material";
import { Button } from "@mui/material";
import { useTodo } from "../context/TodoConext";
import { ADD_TASK } from "../context/TodoConext";

export const TaskForm = () => {
  const { dispatch } = useTodo();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch({ type: ADD_TASK, payload: { title, description, date } });
    setTitle("");
    setDescription("");
    setDate("");
  };

  return (
    <Card className="card mb-4 shadow-lg">
      <div className="card-header bg-secondary text-white text-center py-3">
        <h1 className="h4">Task Management Data</h1>
      </div>
      <CardContent className="card-body">
        <div className="border border-secondary rounded p-4">
          <form onSubmit={handleSubmit}>
            {/* Title and Date Fields */}
            <div className="row mb-3">
              <div className="col-md-8">
                <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-4">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
            </div>

            {/* Description Field */}
            <div className="mb-3">
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-end">
              <button type="submit" className="btn btn-secondary px-4">
                Add
              </button>
            </div>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};
