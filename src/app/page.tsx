import CreateTodoForm from "@/components/custom/Create-todo";
import TodoList from "@/components/custom/Todos-list";

export default function HomePage() {
  return (
    <>
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-8 mt-5 ">
        <CreateTodoForm />
        <TodoList />
      </div>
    </>
  );
}
