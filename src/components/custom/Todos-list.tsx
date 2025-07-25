"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

const TodoList = () => {
  const todos = useQuery(api.todos.getAllTodos);

  if (todos === undefined) {
    return (
      <div className="flex flex-col items-center justify-center h-96 gap-4">
        <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (todos.length == 0) {
    return (
      <div className="flex flex-col items-center justify-center h-96 gap-4">
        <div className="text-3xl font-semibold text-muted-foreground">
          No tasks Yet{" "}
        </div>
        <p className="text-xl text-muted-foreground">
          Add some tasks to get started
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h1 className="text-center text-4xl font-semibold py-4">All Todos :</h1>
      {todos?.map((todo) => (
        <div className="font-semibold text-lg px-2 py-3" key={todo._id}>
          <p className="bg-foreground rounded-lg p-4 text-white text-lg">
            Todo Title : {todo?.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
