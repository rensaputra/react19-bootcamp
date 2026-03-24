# 18. Caching in NextJS

- **Caching Basics**: Caching stores useful data on the local device to avoid fetching it from the server every time, improving application performance.
- **Types of Caching in Next.js**: Next.js uses several types of caching, including request memoization, data caching, full route cache, and router cache.
  - **Request Memoization**: This feature ensures that requests made to the server are not duplicated. If the same request is made from two places in the code, it will save the request once and reuse it instead of making the request again.
  - **Data Caching**: This stores the fetched data as cache. When the page is reloaded, the data is fetched from the cache instead of making a new request to the server, improving performance.
  - **Full Route Cache**: This caches the entire HTML or React server component (RSC) at build time. It helps in faster loading of the entire route as the content is already cached.
  - **Router Cache**: Managed on the client side, this stores the React server component payload data, which helps improve navigation between pages by reducing the need for repeated server requests.
- **Performance Improvement**: These caching methods help reduce server requests and enhance the performance and navigation of the application.

## Unexpected behaviour in project build

- **Next.js categorizes files as static or dynamic during the build process**; static files are cached at build time to improve app speed.
- Because static pages are cached, changes like deleting a product won't show immediately until the app is rebuilt and restarted.
- To ensure fresh data is shown (important for ecommerce apps), you need to configure pages to be dynamic rather than static.

Example what the output looks like during build, here you can see some of the routes are categorized as static and dynamic by NextJs.

```
Route (app)
┌ ƒ /
├ ○ /_not-found
├ ○ /add-product
├ ƒ /edit-product/[id]
├ ƒ /icon
└ ƒ /product-details/[pname]


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

## Static to dynamic: Cache control

-A page is considered dynamic if it's in a dynamic route, uses dynamic functions or variables during rendering, or if you manually export a dynamic configuration.
-You can force a page to be dynamic by exporting a variable like` export const dynamic = 'force-dynamic'`.
-Making a page dynamic controls caching behavior, ensuring the page always shows the latest data instead of serving cached content.

## Practice project

[Source code](/18-CachingInNextJS/project/try-app/)
