# React Hooks

# useState() hook
    useState is a react hook, which creates an "state variable".
    Which helps us to track state in components & updates the user interface
    when state changes.

 ##  Why Do We Need useState?

Manage Component Data
It helps store and update data that affects the UI, like form inputs, counters, or API responses.

Reactivity (Automatic Re-rendering)
When state changes, React automatically re-renders the component to reflect the new state.

Functional Components Can Have State
Before hooks (useState), state was only possible in class components. Now, functional components can manage state easily.

Improves Code Readability
useState makes code more readable and easier to manage than class-based state management.

## How It Works:
useState(0)- initializes state with 0.
count- holds the state value.
setCount- updates the state.
When setCount is called, React re-renders the component with the updated value.

# useEffect() hook
   The useEffect Hook allows you to perform side effects in your components.

   ## Why Do We Need useEffect?
    React components should avoid side effects (like fetching data, updating the DOM, or setting up subscriptions) inside the main body of the function because it can lead to unexpected       behaviors. Instead, useEffect lets us handle these side effects properly.

   ## some usecases of useEffect
   -fetching data from API 
   -Direct updating the DOM
   -Handling Subscriptions (e.g., WebSockets, event listeners)
   -Cleaning Up Effects (e.g., removing event listeners, canceling requests)
   -Timers like SetTimOut and setInterval

   ## Understanding useEffect Behavior:
        Runs After Render
        By default, useEffect runs after the component renders.
        
        Dependency Array ([])
        If empty ([]), it runs only once after the initial render.
        If dependencies ([count]) are provided, it runs when those values change.
        If no dependency array is given, it runs on every render.
        
        Cleanup Function (return () => {})
        Used to clean up effects when the component unmounts or before re-running the effect.
        Important for preventing memory leaks, especially in subscriptions or event listeners.

# Key Takeaways:
        ✅ useEffect runs side effects (fetching data, subscriptions, etc.).
        ✅ The dependency array controls when it runs ([] → once, [value] → when value changes).
        ✅ The cleanup function prevents memory leaks by removing event listeners or canceling API calls.