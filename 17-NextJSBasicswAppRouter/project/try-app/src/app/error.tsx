"use client";
export default function error({ error }) {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <pre>{error.message}</pre>
    </div>
  );
}
