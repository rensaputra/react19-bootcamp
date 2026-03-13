# React Fundamentals

## Creating component from scratch

- **Creating a Custom Component**: Learn how to create a custom React component from scratch by defining a function and converting it to an arrow function.
- **JSX Structure**: Understand the importance of enclosing JSX elements in a parent tag and using parentheses to return JSX.
- **Exporting and Importing Components**: Discover how to export a component using export default and import it into other components for use.
- **Rendering Components**: See how to render the custom component in the main app.js file and verify its output in the browser.

### Q&A

**What is component in react and how to create it?**

> - The components is one of the core concepts of react. React combine HTML, CSS & JS into a custom reusable UI element which is known as components.
> - It helps to break the UIs into smaller, reusable chunks & makes the code easier to manage & maintain.
> - The components are either JS class or function which return the React element.

**What is JSX**

> - JSX is nothing but HTML written in JS file
> - JSX stands for JavaScript XML & is used to write HTML-like code in JavaScript.
> - Using JSX we can create reusable UI components with fewer lines of code with the power of HTML & JavaScript.
> - It is faster than normal JS as it performs optimization while translating to regular JS.
> - React is using JSX for creating components and user interface
> - By using JSX, we can simply write and call the function in HTML itself. We do not have to create a separate function for calls and logics.

## React fragment & empty fragment

- **JSX Expressions**: JSX expressions must have one parent element. To return multiple elements, they must be enclosed in a single container.
- **React Fragments**: React Fragments allow you to group a list of children without adding extra nodes to the DOM, which helps avoid unnecessary nodes.
- **Usage of Fragments**: You can use `<React.Fragment>`, import the Fragment component, or use empty tags `(<> </>)` to wrap elements.
- **Key Attribute**: When using fragments in an Array.map method, use the Fragment component with a key attribute, as

### Q&A

**Q: What is a react fragment and why is it recommended to user over the div?**

> - React provided a feature called React fragments which returns multiple element from a React component by grouping a list of children without adding extra nodes or elements to the DOM.
> - When we want to return JSX with multiple elements, we can put all elements in a container & eventually we return only a single container.

## Default vs named export

- **Default export**: A module can only have one default export. You can import it with any name in another file.  
  When exporting: `export default <variable or component>`  
  When importing: `import ComponentName from "./file.jsx"`
- **Named Export**: You can export multiple components or variables from a module using named exports. These must be imported with the exact names used during export, enclosed in curly brackets.

  When exporting:

  ```
  export const variable = "" or
  export function abc()
  ```

  When importing: `import {Name} from "./file.jsx"`

- **Usage**: Use a default export when exporting a single entity and named export for multile entities from the same module.

## The rules of JSX

- **Single Parent Element**: JSX expressions must return a single parent element. Multiple elements need to be wrapped in a single container, like a div or a fragment.
- **React Fragments**: Using fragments (`<React.Fragment>` or empty tags `<> </>`) helps avoid adding unnecessary nodes to the DOM.
- **Explicitly Closed Tags**: All JSX tags must be explicitly closed, including self-closing tags like <img />.
- **Camel Case for Attributes**: Attributes in JSX should be written in camel case (e.g., strokeWidth instead of stroke-width) to align with JavaScript object keys and improve code readability.

## Assigning JSX to a variable

- **Assigning JSX to a Variable**: You can assign JSX to a variable and render it using curly brackets in the return statement.
- **Rendering Multiple Elements**: Multiple JSX elements can be assigned to a variable by wrapping them with a parent element and using parentheses.
- **Dynamic Values**: Dynamic values can be included in the JSX assigned to a variable using curly brackets.

## Understanding props

- **Reusable Components**: React encourages creating reusable components to avoid duplication of UI.
- **Props**: Props are similar to the parameters used in functions. Or in other words - props are the parameters of components.
- **Using Props**: Props (properties) are used to pass data from one component to another, making components dynamic.
- **Passing Data**: Data such as strings, numbers, objects, arrays, functions, and variables can be passed as props.
- **Accessing Props**: Props are received as an object in the component, and their values can be accessed using the dot notation or destructuring.

### Q&A

Q: What is prop drilling?

> The process of passing data or props from parent component to one or more child components is called prop drilling. It occurs when a prop needs to be passed through several layer of child componnts to reach deeply nested child, which actually needs the data. In that process, each intermediary componnet in the herarchy has to pass the props to another componenet even if it does not use the prop itself.

## Conditional Rendering

- **Conditional Rendering with If Statements**: You can use if statements to conditionally render JSX based on a condition. If the condition is false, you can return an alternative UI element or null.
- **Ternary Operators**: The ternary operator allows you to conditionally render JSX directly within the return statement. It takes a condition followed by a question mark, then the JSX to render if true, and finally a colon with the JSX to render if false.
- **Logical AND Operator**: The logical AND operator (&&) can be used to render JSX only when a condition is true. If the condition is false, nothing is rendered.

## Basic event handling

- **Event Handling in React**: React allows developers to handle user events using a declarative approach, making it easier to create interactive and dynamic user interfaces.
- **Handling Click Events**: To handle a click event, use the `onClick` attribute in camel case and assign a function to it without parentheses.
- **Common Event Handlers**: React supports various event handlers such as `onChange`, `onSubmit`, `onKeyDown`, `onKeyUp`, and `onMouseEnter` for different user interactions.

## Parameter passing

- **Passing Parameters**: To pass parameters to an event handler function, use an arrow function in the onClick property to return the event handler function.
- **Avoiding Unexpected Behavior**: If you use parentheses right after the function in JSX, the function will be called during rendering, which is unexpected. Using an arrow function prevents this issue.
