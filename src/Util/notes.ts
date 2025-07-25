// It consists my notes and important points for future reference

// Installation and Setup :
// 1.) Convex Installation :  npm install convex
// 2.) Convex Dev Env Setup : npx convex dev --> Select the required options in your bash/terminal

// Now Functions :
// -> A new folder 'convex' is created where you will write the controller functions for your APIs

//Terminologies :
// 1.) Query : are the bread and butter of your backend api. they fetch data from the database, check authentication or perform bussiness logic and return back to client application.
// 2.) Mutations : it inserts , updates and deletes data from the database.
// 3.) Actions : It basically calls the third party services like Razorpay or stripe.
// 4.) HTTP Actions : allows to build an HTTP API right in convex usually preferred while setting some web hooks.

//Starting the work :
// 1.) convex/schema.ts : Create a schema for db by defineSchema and defineTable for tale from convex/server and {v} for values being entered in the attributes.
// 2.) for convex provider (to wrap the children with queries, mutations, actions etc) --> go to components/convex-client-provider.tsx and all the ssetps ar mentioned there..
// 3.) Wrap the Navbar and children in layout with the Wrapper of Convex Provider created in step 2 mentioned above.

//Creating the apis :
// 1.) todos.ts file created with the getAllTodos, updateTodo, DeleteTodo, createTodo function using query & mutation.
// 2.) integrate it in client side using useQuery and use Mutations in todo-list.tsx