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

# useRef() Hook

        useRef is a React Hook that allows you to create a reference to a DOM element or store mutable values that persist across renders without causing re-renders.\

##  It is commonly used for:
        Accessing DOM Elements: You can use useRef to get a reference to a DOM element and interact with it directly, like focusing an input field.

        Storing Mutable Values: Unlike state (useState), changes to a useRef value do not trigger a re-render.

        Preserving Values Across Renders: It helps keep values that need to persist across renders but do not require re-rendering the component.

## Key Points:
        useRef returns an object: { current: initialValue }
        The .current property can be updated without causing a re-render.
        Unlike useState, updating useRef does not trigger a re-render.

# useMemo() Hook
        The React useMemo Hook return  a memoized value.(it's like caching a value so that it doesn't need to be recalculated.)

        The useMemo Hook only run when one of its dependencies gets updated.This can improve the performance of the application. There is one more hook in react to improve performance, that is useCallback hook

        The useMemo and useCallback Hooks are similar. The  main difference is: 
                -useMemo return memoized value.
                -useCallback return a memoized function

## When to Use useMemo:
        ✅ When a calculation is expensive and shouldn't run on every render.
        ✅ When passing objects/arrays as props to child components to avoid unnecessary re-renders.

## When NOT to Use useMemo:
        ❌ If the computation is trivial or does not impact performance significantly.
        ❌ If it makes the code harder to read without any real benefit.

# useCallback() Hook

        useCallback is a React Hook used to memoize functions, preventing unnecessary re-creation of functions on every render. It is useful when passing callbacks to child components to avoid unnecessary re-renders.

        The function inside useCallback only gets recreated when dependencies change.
        If dependencies don’t change, React returns the cached function.

        useCallback is a react Hook that let you cache a function definition between re-renders.
        It means, when we use the useCallback Hook, it doesn't create muliple instance og same function when re-render happens.
        Instead of createing new instance of the function, it provides the cached funciton on re-render of th component.
## 🔹 When to Use useCallback?
        ✅ Use it when passing functions to child components (to prevent unnecessary re-renders).
        ✅ Use it when functions are used inside useEffect (to prevent infinite loops).

# useContext() Hooks

        useContext is a React Hook that allows you to access values from a React Context without having to pass props manually through multiple levels of components. It helps in managing global state efficiently.

        useContext is  a React Hook that allows you access data from any component without explicitly passing it down through props at every level.

        useContext is used to manage Global datain the React App.

## Usage of useContext
        Avoids "prop drilling" (passing props down through many nested components).
        Shares data like themes, authentication status, or language settings across the app.

## When to Use useContext
        When passing data deeply across multiple components.
        Managing themes, authentication, or global app settings.