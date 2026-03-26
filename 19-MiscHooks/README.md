# 19. Miscellaneous Hooks

## useActionState() hooks

- The useActionState hook in Next.js helps manage form submissions by combining server actions with client-side state management.
- It returns a state value, a form action function to handle submission, and an isPending flag to indicate loading or processing status.
- This hook simplifies form handling by removing the need for separate event handlers and improves performance by reducing unnecessary re-renders during asynchronous operations like network requests.

**The useActionState() hook handles**

- Asynchronous form submission
- Storing & managing the state of server actions
- Improves performance by reducing unnecessary re-renders

## Syntax

- **Create a server action function** (e.g., in an action.js file)

  ```
  'use server';

  export async function submitForm(formData) {
    // handle form data here
    const name = formData.get('name');
    const email = formData.get('email');
    console.log(name, email);
    // simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return { name, email };
  }
  ```

- **Use the useActionState hook in your component**

  ```
  import { useActionState } from 'next';
  import { submitForm } from './actions';

  const [state, formAction, isPending] = useActionState(submitForm, null);

  // In your form element:
  <form action={formAction}>
    <input name="name" />
    <input name="email" />
    <button type="submit">{isPending ? 'Loading...' : 'Submit'}</button>
  </form>

  // You can use `state` to access the returned data from the server action
  ```

- `useActionState` takes two arguments: server action function and initial state
- It returns an array with `[state, formAction, isPending]`
- `formAction` is ued as the form's `action` handler
- `isPending` indicates if the form submission is in progress

### Practice source code

[Source code](/19-MiscHooks/project/try-app/src/app/useActionState/page.tsx)

## The magic of memoization

- Memoization is an optimization technique that caches the results of expensive function calls to avoid unnecessary recomputations, making React apps faster and more efficient.
- The `react.memo` higher-order component memoizes functional components, preventing them from re-rendering when their props haven't changed.
- Using `react.memo` helps avoid unnecessary child component re-renders caused by unrelated state changes in the parent component.

  ```
  import React from 'react';

  const MyComponent = (props) => {
    // component logic and JSX
    return <div>{props.value}</div>;
  };

  export default React.memo(MyComponent);
  ```

  Note: If I use React compiler, it has Auto-memoization. The compiler identifies that my child component only needs to change if its specific `props` change.

## useCallback() and useMemo()

- **useCallback Hook**: **Memoizes a function** so it doesn't get recreated on every render, preventing unnecessary re-renders of child components and improving performance.
  ```
  const memoizedFunction = useCallback(() => {
    // function logic here
  }, [dependencies]);
  ```
- **useMemo Hook**: **Memoizes the result** of an expensive computation (like summing numbers) so it only recalculates when dependencies change, avoiding redundant calculations.
  ```
  const memoizedValue = useMemo(() => {
    // computation logic here
    return result;
  }, [dependencies]);
  ```
- Both hooks take a callback function and a dependency array, recalculating or recreating only when dependencies change, which helps optimize React app performance effectively.

## The useOptimistic() hook

- The useOptimistic hook enables optimistic UI updates by immediately showing expected changes in the UI before the server confirms them, improving user experience by making the app feel faster.
- It takes the current state and an update function, returning an optimistic state and a function to trigger optimistic updates.
- In the practice app, I demonstrates using useOptimistic in a to-do list app, where new items appear instantly in the list while the server processes the addition in the background, including handling server actions and form submission for smooth updates.

  ```
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(todos, (currentTodos, newTodo) => {
    return [...currentTodos, newTodo];
  });

  // To add a new todo optimistically:
  addOptimisticTodo({ id: Math.random(), name: 'todo' });

  ```

- The first argument is the current state (e.g., todos).
- The second argument is an update function that returns the new state including the optimistic update.
- The hook returns the optimistic state and a function to trigger optimistic updates.

## The useFormStatus() hook

- The useFormStatus hook helps track the status of form submissions, providing details like whether the submission is pending, the form data, submission method, and the action function.
- It enables showing loading indicators and disabling the submit button during form submission to prevent duplicate requests.
- The hook must be used inside a component rendered within a form tag and only provides status for its parent form, not for nested or unrelated forms.

  ```
  import { useFormStatus } from 'react'; // or from the relevant library

  function MyFormComponent() {
    const status = useFormStatus();

    console.log(status); // status contains pending, data, method, action

    return (
      <form>
        {/* form inputs here */}
        <button disabled={status.pending}>
          {status.pending ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    );
  }
  ```

## The useDebugValue() hook

- The `useDebugValue` hook is designed to improve debugging of custom hooks by displaying meaningful labels in React DevTools without affecting the hook's functionality.
- **It accepts two arguments**: the value to display and an optional formatting function to customize how the value appears.
- Using `useDebugValue` helps you see internal state values clearly when working with custom hooks, making debugging more accurate and efficient.

  ```
  import { useDebugValue } from 'react';

  function useCustomHook(value) {
    useDebugValue(value, val => `Value: ${val}`); // optional formatting function
    // hook logic here
  }

  ```

## Practice Project

![Try-app screenshot](/19-MiscHooks/docs/screenshots/try-app.png)  
[Source code](/19-MiscHooks/project/try-app/)
