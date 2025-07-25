// Import the query function helper from Convex's server environment
import { query } from "./_generated/server";

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
