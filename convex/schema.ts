// import defineTable and defineSchema functions

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// Schema setup for my database :
export default defineSchema({
  // table : 'todos'
  todos: defineTable({
    title: v.string(),
    completed: v.boolean()
  })
})
