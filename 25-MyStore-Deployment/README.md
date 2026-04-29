# MyStore: Deployment

## Introduction

- Deployment means making your web application accessible to users by hosting it on a server with a unique IP address.
- Domain names and DNS make it easier for users to access websites without needing to remember IP addresses.
- There are many hosting options, including traditional servers and cloud-based serverless platforms.
- Vercel is a popular serverless platform ideal for deploying Next.js applications, offering seamless integration and built-in continuous integration and deployment (CI/CD) features.

## Introduction to CI/CD

- CI/CD stands for Continuous Integration and Continuous Deployment/Delivery, which automates the process of deploying code changes to production.
- Without CI/CD, developers manually deploy updates, which is time-consuming and prone to errors.
- CI/CD pipelines automatically build, test, and deploy your application whenever code is pushed to a repository branch, ensuring smooth and error-free updates.
- Vercel offers a built-in CI/CD pipeline that integrates with GitHub, making it easy to deploy React, Next.js, and Remix projects efficiently.

## Github Integration

-You learned how to create private GitHub repositories for both the admin and client sections of your project.
-The process of initializing Git locally, configuring user details, staging changes, committing with messages, and pushing code to GitHub was demonstrated.
-Authentication with GitHub is required when pushing code for the first time, but subsequent pushes are streamlined.
-These repositories will be essential for managing your codebase and deploying your React ecommerce app on platforms like Vercel.

https://github.com/rensaputra/MyStore-Admin
https://github.com/rensaputra/MyStore-Client

## Database migration from SQLite to PostgreSQL

- In this section, I went offscript, instead of using MySQL, I used PostgreSQL hosted by Supabase, which is a popular backend-as-a-service platform that provides a PostgreSQL database along with authentication and storage features.
- I created a new PostgreSQL database on Supabase and obtained the connection string.
- I have some issue with using direct connection, due to my ISP doesn't support IPv6, so I have to use Transaction/Session pooler, just to keep in mind.
- I updated the datasource in `schema.prisma` from `sqlite` to `postgresql` and replace the DATABASE_URL in .env file with the new connection string from Supabase.
- Delete the existing migration files in the `prisma/migrations` directory to avoid conflicts with the new database schema, as specified in this [Prisma documentation](https://pris.ly/d/migrate-provider-switch).
- I then run `npx prisma migrate dev --name init_supabase` to create the initial migration and apply it to the new PostgreSQL database.
- After the migration, I can see the new tables created in the Supabase dashboard, however the data is not migrated, there are option to export the data from SQLite to Supabase, such as:
  - Moving the data using `pgloader`, which is a tool that can migrate data from SQLite to PostgreSQL.
    ````docker run --rm -v $(pwd):/data dimitri/pgloader:latest \
    pgloader /data/your-local-db.sqlite \
    postgresql://postgres.[REF]:[PASS]@aws-0-syd.pooler.supabase.com:5432/postgres```
    ````
  - Exporting the data from SQLite to a CSV file and then importing it into PostgreSQL
    - In DBeaver, right-click SQLLite table > Export Data > CSV
    - In Supabase Dashboard, go to the Table Editor > Select Table > Insert > Import Data from CSV
