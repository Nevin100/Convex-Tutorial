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

export default function CreateTodoForm() {
  const createTodo = useMutation(api.todos.createTodo);

  const form = useForm<TodoFormData>({
    resolver: zodResolver(createTodoSchema),
    defaultValues: {
      title: "",
      completed: false,
    },
  });

  const handleCreateTodo = async (data: TodoFormData) => {
    try {
      await createTodo({ title: data.title, completed: false });
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form
        className="w-auto space-y-4"
        onSubmit={form.handleSubmit(handleCreateTodo)}
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
                  ref={field.ref}
                  type="text"
                  placeholder="What are you planning to do ?"
                  disabled={form.formState.isSubmitting}
                  className=""
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
