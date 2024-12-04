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
    <Card className="mb-6 border-2 w-full max-w-3xl mx-auto">
      <CardContent className="p-4 sm:p-6">
        <div className="border-2 border-green-500 rounded-lg p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border-2 rounded-lg w-full"
              />
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border-2 rounded-lg w-full sm:w-1/3"
              />
            </div>

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border-2 rounded-lg h-24 w-full resize-none p-2"
            ></textarea>

            <div className="flex justify-end">
              <Button
                type="submit"
                className="bg-green-500 text-white border-2 border-green-500 hover:bg-green-600 w-full sm:w-auto px-8 py-2 rounded-lg"
              >
                Add
              </Button>
            </div>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};
