# 20. MyStore: Admin Section

## Introduction

- Developing both admin and client sections, including dashboards, user/product management, and shopping features.
- Using **SQLite** with **Prisma ORM** for efficient data handling and **Tailwind CSS** for modern UI/UX design.
- Implementing secure authentication with **Jose**, **JWT**, and **bcrypt.js**, plus integrating **Stripe** for payment processing.
- Applying **CI/CD** practices with **Vercel** deployment and using Recharts for graphical data presentation.

## Project creation

- Creating two separate Next.js applications: one for the admin section and one for the client section.
- Configuring each project with JavaScript, Tailwind CSS for styling, and enabling the app-router.
- Running the development server to verify the setup.
- Customizing the admin app by updating meta information and clearing default styles to prepare for development.

## Creating sidebar component

- Creating a reusable sidebar component inside a dedicated folder and exporting it for use.

  ```
  Folders wrapped in parentheses don't create URL segments—they're purely organizational. This pattern is typically used to:

  Group related routes — Organize routes that share the same layout without affecting the URL structure
  Apply shared layouts — All routes inside (withLayout) use the layout.tsx file in that folder
  Keep URLs clean — The parentheses disappear from the actual route paths
  Example structure:

  app/
    (withLayout)/
      layout.tsx          ← Applied to routes below
      dashboard/page.tsx  → URL: /dashboard
      settings/page.tsx   → URL: /settings
    login/page.tsx        → URL: /login (no layout)
  ```

- Organizing routes with a folder group and layout.js to apply the sidebar only to specific pages, avoiding it on pages like login.
- Using Tailwind CSS grid classes to style the layout, placing the sidebar and main content side by side with appropriate spacing and borders.

## Working on sidebar

- Replace repeated list items with an array mapped to JSX elements for better code management.
- Use React Router's Link component to enable single-page routing in the sidebar menu.
- Add a user avatar and name section to personalize the sidebar, preparing for dynamic data later.
