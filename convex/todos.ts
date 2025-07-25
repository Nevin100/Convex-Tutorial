// Import the query & mutation function helper from Convex's server environment
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Define a Convex query to fetch all todos from the 'todos' collection
export const getAllTodos = query({
  // The handler function runs when this query is called from the frontend
  handler: async (ctx) => {
    // Use the context (ctx) to access the database and collect all documents from 'todos'
    const todos = await ctx.db.query('todos').collect();

    // Reverse the array to show latest todos first (assuming newer ones are at the end)
    return todos.reverse();
  }
});

// Define a Convex Mutation to Create todo into the 'todos' collection
export const createTodo = mutation({
  // Use the arguments (args) to send the data to the database.
  args: {
    title: v.string(),
    completed: v.boolean(),
  },
    // The handler function runs when this mutation is called from the frontend
  handler: async (ctx, args) => {
    // Use the context (ctx) to access the database and insert the document into the 'todos' collection/table  by passing the args.
    return ctx.db.insert('todos', {
      title: args.title,
      completed: false
    })
  }
})