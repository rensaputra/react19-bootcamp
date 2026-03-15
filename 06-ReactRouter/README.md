# 6. React Router

## Introduction to routing

- **Routing Concept**: Routing allows accessing different pages of an application based on the URL path.
- **URL Parameters**: The URL parameters change to reflect the different pages being accessed, such as `/learn` or `/blog`.

## Configure routes using React Router

- **Installation**: Install the react-router library using `npm install react-router`.
- **BrowserRouter Component**: Wrap the top-level component with the `BrowserRouter` component to enable routing throughout the application.

```
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

- **Routes Configuration**: Use the Routes component to define individual routes with the Route component, specifying the path and the corresponding component to render.
- **Path Matching**: Ensure the path in the Route component matches the URL path for correct component rendering.

```
function App() {
  return (
    <div>
      <ul className="flex gap-4">
        <li><a href="/home">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/about">About</a></li>
      </ul>
      <hr />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
```

## Understanding single-page (SPA) applicaiton and multi-page application

- **Multi-Page Application (MPA)**: In MPAs, navigating to a new page sends a request to the server, which responds with a new HTML page, causing the entire page to reload.
- **Single-Page Application (SPA)**: SPAs allow navigation without refreshing the entire page, resulting in a smoother user experience. This is achieved using the React Router Library.
- **React Router**: To implement SPA, replace anchor tags with the `Link` component from React Router, which uses the `to` attribute instead of `href`.
- **BrowserRouter Component**: Wrapping the entire app inside the `BrowserRouter` component enables React Router to keep track of URL changes and navigation history.

```
function App() {
  return (
    <div>
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
```
## Not found page (404)

- **Creating a 404 Not Found Component**: Create a `notfound.tsx` file and define a component that returns the text '404 Not Found'.
- **Configuring the Route**: In `app.js`, use the Route component with the path attribute set to an asterisk (*) to catch all invalid URLs and render the Not Found component.
- **Wildcard Character**: The asterisk (`*`) acts as a wildcard to match any URL that doesn't match other defined routes. 