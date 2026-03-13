# 2. State Management

## What's the state and why needed?

- **State vs. Regular Variables**: State variables are watched by React, while regular JavaScript variables are not. In other words, react re-renders the component whereever the state is updated. Any change made to a regular variable will not trigger rendering of a component.
- **DOM Updates**: React handles DOM updates for state variables, ensuring the UI reflects the current state.
- **Creating State**: To make React watch a variable, it needs to be registered as a state variable using the useState hook.

## useState() hook: Understanding state creation

- **State Variables**: React uses the useState hook to create state variables that React watches for changes.
- **Initial Value**: The useState hook takes an initial value for the state variable.
- **State Array**: useState returns an array with two elements: the current state value and a function to update it.
- **Destructuring**: You can destructure the array returned by useState to get the state variable and the setter function.
- **Naming Conventions**: It's common to name the state variable and the setter function with a pattern like count and setCount.
- **Updating State**: Use the setter function to update the state variable, which will trigger a re-render of the component.

## State as a snapshot

- **State Variables vs. Regular Variables**: State variables in React trigger a re-render when updated, unlike regular JavaScript variables.
- **Re-rendering**: Setting state does not change the actual state variable immediately but triggers a re-render with the updated state.
- **Snapshot of State**: React provides a snapshot of the state for each render, ensuring consistency in the UI.
- **Updater Function**: To handle multiple state updates in a single render, use the updater function in the setter method

## Updater function

- **Updater Function**: Use the updater function inside the setter method to handle multiple state updates correctly. This function takes the previous state and calculates the next state.
- **State Queue**: React queues the updater functions and calls them in order during the next render, ensuring each function gets the correct previous state.
- **Arrow Functions**: You can write the callback function directly in the setter function using arrow functions for simplicity and clarity.

```
function App() {
  let [ctr, setCtr] = useState(0);

  const increment = () => {
    setCtr((prevCtr) => prevCtr + 1);
    setCtr((prevCtr) => prevCtr + 1);
    setCtr((prevCtr) => prevCtr + 1);
  };
  return (
    <div className="App">
      <h1>{ctr}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```
