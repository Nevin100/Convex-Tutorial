// import defineTable and defineSchema functions

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

// Schema setup for my database :
export default defineSchema({
  ...authTables,
  // table : 'todos'
  todos: defineTable({
    title: v.string(),
    completed: v.boolean()
  })
})
