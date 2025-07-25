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
        <div className="text-xl font-semibold text-muted-foreground">
          No tasks Yet{" "}
        </div>
        <p className="text-sm text-muted-foreground">
          Add some tasks to get started
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todos?.map((todo) => <p key={todo._id}>{todo?.title}</p>)}
    </div>
  );
};

export default TodoList;
