# eStore — Admin Section

A Next.js admin dashboard for managing the eStore application. Uses Prisma ORM with a SQLite database.

## Project Structure

```
20-MyStore-AdminSection/project/
├── admin/    # Admin dashboard (Next.js + Prisma + SQLite)
└── client/   # Customer-facing storefront (Next.js)
```

## Prerequisites

- Node.js 18+
- npm

## Getting Started

### 1. Admin App

```bash
cd 20-MyStore-AdminSection/project/admin
npm install
```

Set up the database:

```bash
# Generate the Prisma client
npm run gen:prisma

# Run migrations (creates dev.db)
npm run migrate:dev
```

Start the development server:

```bash
npm run dev
```

The admin app runs at **http://localhost:3000**.

#### Available Routes

| Route        | Description          |
| ------------ | -------------------- |
| `/`          | Dashboard home       |
| `/users`     | List admin users     |
| `/users/add` | Add a new admin user |

---

### 2. Client App

```bash
cd 20-MyStore-AdminSection/project/client
npm install
npm run dev
```

The client app runs at **http://localhost:3001** (use `--port 3001` if admin is already on 3000).

---

## Environment Variables

The admin app reads database configuration from `.env`:

```env
DATABASE_URL="file:./dev.db"
```

---

## Available Scripts (Admin)

| Script                 | Description                             |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Start the dev server                    |
| `npm run build`        | Build for production                    |
| `npm run start`        | Start the production server             |
| `npm run lint`         | Run ESLint                              |
| `npm run gen:prisma`   | Generate the Prisma client              |
| `npm run migrate:dev`  | Run DB migrations in development        |
| `npm run migrate:prod` | Deploy DB migrations in production      |
| `npm run db:push`      | Push schema changes without a migration |
| `npm run db:seed`      | Seed the database                       |

## Tech Stack

- [Next.js 16](https://nextjs.org/) with App Router
- [React 19](https://react.dev/)
- [Prisma 7](https://www.prisma.io/) with SQLite
- [Tailwind CSS 4](https://tailwindcss.com/)
- TypeScript
