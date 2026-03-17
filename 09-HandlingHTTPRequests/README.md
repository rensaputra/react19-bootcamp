# 9. Handling HTTP Requests

## Introduction: HTTP requests

- **HTTP Requests**: These are used by the client-side application to request data from the server. The server processes the request, fetches data from the database if needed, and sends it back to the client.
- **AJAX**: Stands for Asynchronous JavaScript and XML. It's a technique used in web development to communicate with the server and update web pages asynchronously.
- **Fetch API**: A popular method in JavaScript for making HTTP requests from a React application. It allows the client-side to communicate with the server efficiently.

## fetch() API

- **Fetch API**: The Fetch API is a modern method for making HTTP requests in JavaScript, replacing the older XMLHttpRequest method.
- **Syntax**: The fetch method takes a URL as the first argument and an optional object literal for configurations (e.g., method, body).

  ```
  fetch(url, options)
  - url: The URL to which the request is sent.
  - options (optional): An object literal containing configurations for the request, such as:
      - method: The HTTP method (e.g., GET, POST, PUT, DELETE).
      - headers: Any headers you want to include in the request.
      - body: The body of the request, typically used with methods like POST or PUT.
  ```

- **Asynchronous Nature**: Fetch API calls are asynchronous, returning a promise. You can handle the response using async/await or promise chaining with `.then()`.
- **Handling Responses**: The response from a fetch call can be processed to extract data, typically using `response.json()` to parse JSON data.
  ```
  fetch('https://api.example.com/data', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({ key: 'value' })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  ```

## Rendering users data

- **State Management**: Use the useState hook to create and manage state for storing fetched data.
- **Fetch API**: Use the Fetch API to make HTTP requests and fetch data from a server.
- **useEffect Hook**: Place the Fetch API call inside the useEffect hook with an empty dependency array to ensure the API call is made only once when the component mounts, preventing infinite re-renders.
- **Rendering Data**: Map over the fetched data and render it as JSX elements, applying necessary styling for better presentation.

## POST method in fetch() API

- **POST Requests**: Use the Fetch API to make POST requests to add or insert data into a database.
- **Request Configuration**: The fetch method takes a URL and an optional object for configurations like method, headers, and body.
- **Data Handling**: Convert data to a string format using JSON.stringify before sending it in the request body.
- **Response Handling**: Use .then() to process the response and extract data, typically using response.json().

  ```
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ key: 'value' })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  ```

## PUT and PATCH method in fetch() API

- **PATCH and PUT Methods**: Both methods are used to update data on the server. `PATCH` is used for parial updates, while `PUT` is used for full updates.

  ```
    fetch(url, {
      method: 'PATCH', //or PUT
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ key: 'value' })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  ```

## DELETE method in fetch() API

- **DELETE Method**: Used to delete a record from the database by passing an ID or token of recognition in the URL.
  ```
  fetch(url, {
  method: 'DELETE'
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  ```

## Error handling in fetch() API

- **Handling Errors in Fetch API**: How to handle errors in fetch API by using `.catch`
  ```
  fetch(url)
    .then(response => {
      if (!response.ok) {
        return response.json().then(errorData => {
          throw new Error(errorData.message);
        });
      }
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => {
      console.error('Error:', error);
      alert(error.message); // Display the error message in an alert popup
    });
  ```

## Practice Project

![Simple app calling dummy REST API](/09-HandlingHTTPRequests/docs/screenshots/Simple%20app%20calling%20dummy%20REST%20API.png)  
Practice HTTP Request using Mock API | [Source Code](project/react19-ts/)
