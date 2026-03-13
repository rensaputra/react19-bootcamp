# Event Handling: Deep Dive

## React even object: Synthethic event

- **Synthetic Events**: Synthetic events in React are cross-browser wrappers around the browser's native events, ensuring compatibility across different browsers.
- **Event Parameter**: The event parameter (often named e) in the event handler function contains event-related data, similar to JavaScript's native event object.
- **Properties and Methods**: Synthetic events have various properties (like target, bubbles, cancelable) and methods (such as preventDefault, stopPropagation) that are useful in handling events in React.
- **Usage Example**: The video demonstrates how to use e.target to get a reference to the element where the event occurred and how to use e.target.innerHTML to get the content of an HTML element.

## Input event: Textbox

- Use the `onChange` event to handle changes in an input field.
- Access the input value using `e.target.value` instead of `e.target.innerHTML`.
- The `onChange` event triggers every time the input value changes, including when characters are removed.

## Event propagation: Bubbling

- **Event Bubbling**: When an event is triggered on a child element, it propagates up the DOM tree to its ancestor elements.

```
import React from 'react';

class EventBubbling extends React.Component {
  handleParentClick = () => {
    alert('Parent Div clicked');
  };

  handleChildClick = (e) => {
    alert('Child Button clicked');
    e.stopPropagation(); // Prevents the event from bubbling up to the parent
  };

  render() {
    return (
      <div onClick={this.handleParentClick} style={{ padding: '20px', border: '1px solid black' }}>
        Parent Div
        <button onClick={this.handleChildClick}>Child Button</button>
      </div>
    );
  }
}

export default EventBubbling;
```

- **Event Capturing**: The event propagates from ancestor to child. In React, you can handle this using the onClickCapture attribute.

```
import React from 'react';

class EventCapturing extends React.Component {
  handleParentClick = () => {
    alert('Parent Div clicked');
  };

  handleChildClick = () => {
    alert('Child Button clicked');
  };

  render() {
    return (
      <div onClickCapture={this.handleParentClick} style={{ padding: '20px', border: '1px solid black' }}>
        Parent Div
        <button onClick={this.handleChildClick}>Child Button</button>
      </div>
    );
  }
}

export default EventCapturing;
```

- **Bubbles Property**: This property of the event object indicates whether the event bubbles up through the DOM tree.

```
function handleDivClick(event) {
  console.log(event.bubbles); // true if the event bubbles, false otherwise
}
```

## Stopping propagation

- **stopPropagation Method**: This method prevents an event from reaching its ancestor elements in the DOM tree.
- **Usage**: Call `e.stopPropagation()` within the event handler function to stop the event from bubbling up.
- **Verification**: Use `e.isPropagationStopped()` to check if the event propagation has been stopped, which returns a boolean value.

## preventDefault(): Preventing default behaviour

- **Default Behavior**: The default behavior of a form submission is to refresh the page and clear the input fields.
- **preventDefault Method**: Use the `preventDefault` method from the event object to prevent the default form submission behavior.
- **Implementation**: In the `handleSubmit` function, receive the event object as a parameter and call `e.preventDefault()` to stop the form from refreshing the page.

## Form with multiple states

- **State Management**: Use separate states for each input field or a single state object to manage multiple input values.
- **Event Handling**: Use the onChange event to update state with input values in real-time.
- **Form Submission**: Prevent the default form submission behavior using `e.preventDefault()` and update a separate state to store the submitted data.

## Form states as Object

- **State as Object**: Use an object to manage multiple form values within a single state.
- **Updating State**: Use the spread operator to update specific properties within the state object without losing other properties.
- **Rendering State**: Convert the state object to a string using JSON.stringify for rendering in JSX.
