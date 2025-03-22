# Prop Drilling

Prop drilling is when you pass data (props) from a parent component to a deeply nested child component by going through multiple intermediate components that don’t actually need the data.

Imagine you have a grandparent component that wants to send a message to its grandchild, but the message has to go through the parent first. Even though the parent doesn’t need the message, it still has to pass it down just so the grandchild can receive it.

This can make your code messy and harder to manage. To avoid prop drilling, you can use context API or state management tools like Redux to provide data directly where it's needed. 🚀

## - Context AP (Built-in React Feature)

- Best for: Small to medium-scale applications where state is not very complex.
-  How it works: Provides a way to pass data directly to deeply nested components without prop drilling.

#### Pros:
- Simpler to use, no extra setup required.
- Built into React (no external libraries).
- Works well for lightweight state management (e.g., theme, user authentication).

#### Cons:
- Can cause re-renders if not optimized.
- Not ideal for managing large, complex state.

## - Redux (External State Management Library)

- Best for: Large-scale applications with complex state and frequent updates.
- How it works: Stores global state in a centralized store, and components access/update state using actions and reducers.

#### Pros:
- Predictable state management (single source of truth).
- Works well with large applications where multiple components need shared data.
- Debugging tools like Redux DevTools make tracking state changes easier.

####  Cons:
- More boilerplate code (actions, reducers, dispatch).
- Requires additional setup and learning curve.
- Overkill for small projects.

### Which One to Use?
- If your state is simple and limited to a few components → Context API ✅
- If your app has complex global state with many updates → Redux ✅

---

### State Management Libraries

- Redux 
- If we use redux in react => Redux-react
- Redux easier version => Redux-Toolkit (RTK)
- Zustand

# Notes

## Steps 

### 1- Create a Context
`const UserContext = React.createContext()`
- This creates a new Context called `UserContext`.
- It acts as a container for shared data that multiple components can access.


### 2- Export the Context
`export default UserContext`
- This exports UserContext, so it can be used in other files.

## How to Use Context in a React App

- ✅ Step 1: Wrap your component tree with UserContext.Provider and pass a value.
- ✅ Step 2: Use useContext(UserContext) inside child components to access the value.


