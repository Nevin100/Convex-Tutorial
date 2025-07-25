// Import the query & mutation function helper from Convex's server environment
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// -------------------- GET ALL TODOS --------------------
/**
 * Query to fetch all todos from the 'todos' collection.
 */
export const getAllTodos = query({
  // The handler function runs when this query is called from the frontend
  handler: async (ctx) => {
    // Use the context (ctx) to access the database and collect all documents from 'todos'
    const todos = await ctx.db.query('todos').collect();

    // Reverse the array to show the latest todos first (assuming newer ones are at the end)
    return todos.reverse();
  }
});

// -------------------- GET SINGLE TODO BY ID --------------------
/**
 * Query to fetch a single todo item by its ID from the 'todos' collection.
 */
export const getTodo = query({
  // Define the argument to receive the todo ID
  args: {
    id: v.id("todos"),  // ID of the todo to fetch
  },
  // Handler to fetch the specific todo document
  handler: async (ctx, args) => {
    // Use ctx.db.get() to fetch the document by ID
    const todo = await ctx.db.get(args.id);

    // Return the found todo (can be null if not found)
    return todo;
  }
});

// -------------------- CREATE TODO --------------------
/**
 * Mutation to add a new todo to the 'todos' collection.
 */
export const createTodo = mutation({
  // Define the shape of expected arguments using Convex validators
  args: {
    title: v.string(),       // Title of the todo
    completed: v.boolean(),  // Initial completion status
  },
  // The handler function runs when this mutation is triggered from the frontend
  handler: async (ctx, args) => {
    // Insert a new todo document into the 'todos' collection
    return ctx.db.insert('todos', {
      title: args.title,
      completed: false  // Force 'completed' to be false on creation
    });
  }
});


// -------------------- UPDATE TODO --------------------
/**
 * Mutation to update an existing todo by its ID.
 */
export const updateTodo = mutation({
  // Define the expected arguments with validators
  args: {
    id: v.id("todos"),        // ID of the todo to update
    title: v.string(),        // New title
    completed: v.boolean(),   // New completed status
  },
  // Handler to perform the update
  handler: async (ctx, args) => {
    // Update the todo with the given ID using patch
    return ctx.db.patch(args.id, {
      title: args.title,
      completed: args.completed
    });
  }
});


// -------------------- DELETE TODO --------------------
/**
 * Mutation to delete a todo by its ID.
 */
export const deleteTodo = mutation({
  // Define the argument to receive the todo ID
  args: {
    id: v.id("todos"),  // ID of the todo to delete
  },
  // Handler to perform the deletion
  handler: async (ctx, args) => {
    // Delete the document from 'todos' using its ID
    return ctx.db.delete(args.id);
  }
});

