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
