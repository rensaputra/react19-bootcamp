# 24. MyStore: Reports and Analysis (Charts)

## Introduction

- Business owners and customers benefit from data visualization to analyze progress and identify areas for improvement.
- Reports and charts are typically displayed in the admin section, showing metrics like total customers, buyers, total revenue, and recent orders.
- The course demonstrates how to implement these reports and sales/customer analysis charts on the admin dashboard, providing a foundation you can expand on for your own projects.

## Preparing customers and buyers report

- Fetch customer and buyer data from the database using a server action.
- Buyers are identified by filtering customers who have sales records.
- The dashboard data object includes total buyers and total customers, which is then used in the admin dashboard page.

## Rendering customers & buyers report

- Shows how to create dashboard cards in React to display dynamic counts of total buyers and customers.
- The dashboard component receives data as props, enabling dynamic rendering of values instead of static ones.
- Styling for the cards is managed via custom CSS classes to create a neat and consistent UI.

## Preparing total revenue report

- Shows how to fetch sales data from the database using a server-side method.
- The total revenue is calculated by summing the grand total price from all sales using the array.reduce method.
- The revenue is then displayed dynamically in a dashboard card component with proper formatting and styling.

## Preparing recent order report

- Shows how to fetch recent orders data from the database, including related buyer and product details, using Prisma Studio to understand table relationships.
- Prisma studio is a modern database management tool that provides a visual interface for managing and querying databases, making it easier to understand data relationships and structure. To start prisma studio, run `npx prisma studio` in the terminal, which will open Prisma Studio in your default web browser.
- The video demonstrates creating a React component to display recent orders in a styled table with columns for buyer name, date, total amount, payment mode, and products.
- It covers formatting timestamps into a readable date format and improving UI spacing for better presentation.

https://github.com/rensaputra/react19-bootcamp/pull/14

## Preparing recent order report

- The video demonstrates how to fetch recent orders data from a database using Prisma, including related buyer and sales transaction details, sorted by date and limited to the latest five orders.
- It shows how to create a React component to display this data in a styled table format, reusing UI patterns from other parts of the dashboard.
- The video also covers formatting date strings for better readability using a utility function, and making UI spacing adjustments for a cleaner layout.

## Creating purchased products modal

- It demonstrates how to create an information icon button in a React component that, when clicked, opens a pop-up modal showing the product list for a selected order.
- The video shows how to manage the modal's open/close state using React hooks and pass state setter functions as props to control the modal from parent and child components.
- It highlights reusing existing popup component code to maintain consistency and efficiency in UI design.

https://github.com/rensaputra/react19-bootcamp/pull/15/changes/01cfb3d82a2ffa0325bd62d75250b01edb94a530

## Fetching purchased products in modal

- It demonstrates how to create and manage state in React using the useState hook to store selected order data.
- The video shows how to handle click events to update state dynamically when a user interacts with the UI.
- It explains passing state data as props to child components, enabling the Purchased Products Modal to display relevant product details.

https://github.com/rensaputra/react19-bootcamp/pull/15/changes/5461f46aba33aa4c934ab16f0d5df08f3e340792

## Render products in the purchased products table

- It shows how to render a product list in a modal using a table format, displaying product name, selling price, quantity purchased, and total amount.
- The video demonstrates making UI improvements such as adjusting modal width and adding spacing for better layout and user experience.
- It highlights formatting currency values properly within the table to enhance clarity.

https://github.com/rensaputra/react19-bootcamp/pull/15/changes/194aba9978e4077427053595878250b2fa696395

## Implemeting charts using Recharts

- The video introduces the recharts library for creating various types of customizable charts in React and Next.js applications.
- Recharts is a React-based library that helps developers create various types of cusomizable charts such as line, bar, pie, and area charts, which are great for visualizing data in your React or Next.js applications.
- To install recharts, run `npm i recharts` in your project directory.This will add recharts to your project so you can start building dynamic and interactive charts easily.
- It demonstrates building a custom line chart component using dummy data, including adding x-axis and y-axis, tooltips, and grid lines for better visualization.
- It highlights the importance of responsive design by using the ResponsiveContainer component and managing parent container dimensions to ensure charts render correctly across different screen sizes.

## Preparing and rendering sales report chart

- It explains how to use the `array.reduce` method to aggregate total sales by date from raw sales data.
- The video shows how to convert the aggregated sales object into an array of objects with date and sales attributes, which is the format needed for the chart.
- It highlights sorting the sales data in ascending order by date to ensure the chart displays the timeline correctly.
- It shows how to render a sales chart dynamically by passing sales data as props to a custom line chart React component.
- The video explains making the chart more flexible by allowing the `Y-axis` data key and line color to be set via props, enabling reuse and customization.
- It highlights styling techniques to ensure the chart's line color inherits from the parent component's text color for consistent UI design.
- In CSS, the keyword `currentColor` is used to make an element's color inherit the current text color of its parent.

https://github.com/rensaputra/react19-bootcamp/pull/16

## Preparing and creating customers report chart

- It shows how to use the `array.reduce` method to count total customers created on each date, transforming raw data into a format suitable for charting.
- The video demonstrates converting the aggregated customer data object into an array of objects for use in a line chart component.
- It highlights rendering the customer report line chart dynamically with styling adjustments, including color and layout, to display it alongside the sales chart.
- Creating a separate chart section component improves code readability and makes debugging easier.
- Passing dashboard data as props to the chart component enables dynamic rendering of charts based on the data.
- Importing and using custom chart components within this section helps organize the UI and promotes component reuse.

https://github.com/rensaputra/react19-bootcamp/pull/17
