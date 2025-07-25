/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TodoList = () => {
  const todos = useQuery(api.todos.getAllTodos);
  const updateTodo = useMutation(api.todos.updateTodo);
  const deleteTodo = useMutation(api.todos.deleteTodo);

  // Maintain edited titles separately
  const [editedTitles, setEditedTitles] = useState<{ [key: string]: string }>(
    {}
  );

  const handleChange = (id: any, value: string) => {
    setEditedTitles((prev) => ({ ...prev, [id]: value }));
  };

  const handleUpdate = async (id: any, completed: boolean) => {
    try {
      await updateTodo({
        id,
        title: editedTitles[id],
        completed,
      });
      console.log("Todo updated successfully!");
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  };

  const handleDelete = async (id: any) => {
    try {
      await deleteTodo({ id });
      console.log("Todo Deleted successfully!");
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  };

  if (todos === undefined) {
    return (
      <div className="flex flex-col items-center justify-center h-96 gap-4">
        <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-96 gap-4">
        <div className="text-3xl font-semibold text-muted-foreground">
          No tasks Yet
        </div>
        <p className="text-xl text-muted-foreground">
          Add some tasks to get started
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h1 className="text-center text-4xl font-bold py-4">All Todos :</h1>

      {todos.map((todo) => (
        <div className="px-2 py-3 space-y-2 flex gap-3" key={todo._id}>
          <Input
            type="text"
            value={editedTitles[todo._id] ?? todo.title}
            onChange={(e) => handleChange(todo._id, e.target.value)}
            className="text-lg font-medium outline-indigo-400 border-2"
          />
          <Button
            onClick={() => handleUpdate(todo._id, todo.completed)}
            className="text-white p-3"
          >
            Update
          </Button>
          <Button
            onClick={() => handleDelete(todo._id)}
            className="text-white p-3"
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
