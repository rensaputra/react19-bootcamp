# 18. Caching in NextJS

- **Caching Basics**: Caching stores useful data on the local device to avoid fetching it from the server every time, improving application performance.
- **Types of Caching in Next.js**: Next.js uses several types of caching, including request memoization, data caching, full route cache, and router cache.
  - **Request Memoization**: This feature ensures that requests made to the server are not duplicated. If the same request is made from two places in the code, it will save the request once and reuse it instead of making the request again.
  - **Data Caching**: This stores the fetched data as cache. When the page is reloaded, the data is fetched from the cache instead of making a new request to the server, improving performance.
  - **Full Route Cache**: This caches the entire HTML or React server component (RSC) at build time. It helps in faster loading of the entire route as the content is already cached.
  - **Router Cache**: Managed on the client side, this stores the React server component payload data, which helps improve navigation between pages by reducing the need for repeated server requests.
- **Performance Improvement**: These caching methods help reduce server requests and enhance the performance and navigation of the application.
