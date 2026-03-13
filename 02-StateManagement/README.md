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

## Working with multiple states

- Managing multiple states

```
import React, { useState } from 'react';

function ProductComponent() {
  const [productName, setProductName] = useState('orange');
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>{productName}</h1>
      <button onClick={() => setProductName('orange')}>Orange</button>
      <button onClick={() => setProductName('apple')}>Apple</button>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <p>Product details are shown here.</p>}
    </div>
  );
}

export default ProductComponent;
```

## Initializer function: Avoiding recreation of initial state

- **Initializer Function for State**: Use an initializer function to set the initial state in React, which is beneficial for complex calculations or large arrays.
- **Avoiding Performance Issues**: Avoid using parentheses when assigning the initializer function to prevent it from being called on every render, which can affect performance.
- **Correct Usage**: Assign the function name directly without parentheses to ensure it is only called during initialization.

```
import React, { useState } from 'react';

// Initializer function
const createInitialState = () => {
  console.log('Created initial state');
  return 'Initial State';
};

function App() {
  // Using the initializer function to set the initial state
  const [state, setState] = useState(createInitialState);

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setState('Updated State')}>Update State</button>
    </div>
  );
}

export default App;
```

- **Initializer Function**: `createInitialState` is a function that returns the initial state value.
- **Setting Initial State**: The `useState` hook uses the `createInitialState` function to set the initial state.
- **Avoiding Performance Issues**: By passing the function itself (without parentheses), it ensures the function is only called once during initialization.

## Array as state

- **Using Arrays as State**: You can initialize state with an array, either empty or with initial values, to render elements in JSX.
- **Updating State with Arrays**: When updating state with arrays, use the spread operator to retain existing elements and add new ones.
- **Removing Elements from Arrays**: Use methods like splice to remove elements from the array state.
- **Avoiding State Overwrite**: Ensure to include previous state values when setting new state to avoid overwriting existing data.

```
import React, { useState } from 'react';

function ArrayStateComponent() {
  // Initialize state with an empty array
  const [items, setItems] = useState([]);

  // Function to add a new item
  const addItem = () => {
    setItems(prevItems => [...prevItems, `Item ${prevItems.length + 1}`]);
  };

  // Function to remove the last item
  const removeItem = () => {
    setItems(prevItems => prevItems.slice(0, -1));
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <button onClick={removeItem}>Remove Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayStateComponent;
```

- **Initialize State**: `const [items, setItems] = useState([]);` initializes the state with an empty array.
- **Add Item**: ``setItems(prevItems => [...prevItems, `Item ${prevItems.length + 1}`]);`` adds a new item to the array while retaining existing items.
- **Remove Item**: `setItems(prevItems => prevItems.slice(0, -1));` removes the last item from the array.
- **Render Items**: `{items.map((item, index) => (<li key={index}>{item}</li>))}` renders the items in a list.

## Object as state

- **Using Objects as State**: Initialize state with an object, adding properties as needed.
- **Updating Object State**: Use the setter function to update state properties, ensuring to retain existing properties using the spread operator.
- **Efficient State Management**: Avoid manually listing all properties when updating state by using the spread operator for a more dynamic and efficient approach.

```
import React, { useState } from 'react';

function ObjectStateComponent() {
  // Initialize state with an object
  const [product, setProduct] = useState({ productCode: '001', productName: 'orange' });

  // Function to update product name
  const updateProductName = (name) => {
    setProduct(prevProduct => ({ ...prevProduct, productName: name }));
  };

  return (
    <div>
      <h1>Product Code: {product.productCode}</h1>
      <h1>Product Name: {product.productName}</h1>
      <button onClick={() => updateProductName('apple')}>Change to Apple</button>
    </div>
  );
}

export default ObjectStateComponent;
```

Key Points:

- **Initialize State**: `const [product, setProduct] = useState({ productCode: '001', productName: 'orange' });` initializes the state with an object.
- **Update State**: `setProduct(prevProduct => ({ ...prevProduct, productName: name }));` updates the productName property while retaining other properties using the spread operator.
- **Render State**: `{product.productCode}` and `{product.productName}` render the state properties in the JSX.
