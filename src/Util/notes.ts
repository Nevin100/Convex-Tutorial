// It consists my notes and important points for future reference

// Installation and Setup :
// 1.) Convex Installation :  npm install convex
// 2.) Convex Dev Env Setup : npx convex dev --> Select the required options in your bash/terminal

// Now Functions :
// -> A new folder 'convex' is created where you will write the controller functions for your APIs

// Terminologies :
// 1.) Query : are the bread and butter of your backend api. they fetch data from the database, check authentication or perform bussiness logic and return back to client application.
// 2.) Mutations : it inserts , updates and deletes data from the database.
// 3.) Actions : It basically calls the third party services like Razorpay or stripe.
// 4.) HTTP Actions : allows to build an HTTP API right in convex usually preferred while setting some web hooks.

// Starting the work :
// 1.) convex/schema.ts : Create a schema for db by defineSchema and defineTable for tale from convex/server and {v} for values being entered in the attributes.
// 2.) for convex provider (to wrap the children with queries, mutations, actions etc) --> go to components/convex-client-provider.tsx and all the ssetps ar mentioned there..
// 3.) Wrap the Navbar and children in layout with the Wrapper of Convex Provider created in step 2 mentioned above.

// Creating the apis :
// 1.) todos.ts file created with the getAllTodos, updateTodo, DeleteTodo, createTodo function using query & mutation.
// 2.) integrate it in client side using useQuery and use Mutations in todo-list.tsx

// Authentication :
// 1.) Install : npm install @convex-dev/auth @auth/core@0.37.0
// 2.) Run : npx @convex-dev/auth
// 3.) Fill out the options acordingly and the setup is successfully finished..
// 4.) Now, insert authtables in schema file just above todos as ...authtables
// 5.) Now, Wrap your app in ConvexAuthNextjsServerProvider from @convex-dev/auth/nextjs/server in layout.jsx:
// 6.) After that, In your client provider file, replace ConvexProvider from convex/react with ConvexAuthNextjsProvider from @convex-dev/auth/nextjs:
// 7.) Setup middleware.ts as written
// 8.) Setup GitHub OAuth as you know, and also in callback url ('.../api/auth/callback/github') paste the line from HTTP Actions section from convex dashboards/settings/deploy.
// 9.) Paste the AUTH_GITHUB_ID and AUTH_GITHUB_SECRET in the env of convex dashboard