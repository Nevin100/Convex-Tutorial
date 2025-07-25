/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createTodoSchema } from "@/lib/zod";
import { api } from "../../../convex/_generated/api";
import { useMutation } from "convex/react";

type TodoFormData = z.infer<typeof createTodoSchema>;

// Props expected from parent
type UpdateTodoProps = {
  todo: {
    id: string;
    title: string;
    completed: boolean;
  };
};

export default function UpdateTodo({ todo }: UpdateTodoProps) {
  const updateTodo = useMutation(api.todos.updateTodo);

  const form = useForm<TodoFormData>({
    resolver: zodResolver(createTodoSchema),
    defaultValues: {
      title: todo.title,
      completed: todo.completed,
    },
  });

  const handleUpdate = async (data: TodoFormData) => {
    try {
      await updateTodo({
        id: todo.id as any,
        title: data.title,
        completed: data.completed,
      });
      console.log("Todo updated successfully!");
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <Form {...form}>
      <form
        className="w-auto space-y-4"
        onSubmit={form.handleSubmit(handleUpdate)}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-2xl mb-2">Title :</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="Edit your task title"
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={form.formState.isSubmitting}>
          Update Todo
        </Button>
      </form>
    </Form>
  );
}
