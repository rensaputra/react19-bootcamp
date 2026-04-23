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

## Creating purchased products modal

https://github.com/rensaputra/react19-bootcamp/pull/15/changes/01cfb3d82a2ffa0325bd62d75250b01edb94a530

## Fetching purchased products in modal

https://github.com/rensaputra/react19-bootcamp/pull/15/changes/5461f46aba33aa4c934ab16f0d5df08f3e340792

## Render products in the purchased products table

https://github.com/rensaputra/react19-bootcamp/pull/15/changes/194aba9978e4077427053595878250b2fa696395

## Implemeting charts using Recharts
