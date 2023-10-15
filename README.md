generate schema.prisma from existing database
npx prisma db pull
Run <npx prisma db pull> to turn your database schema into a Prisma schem
Run <npx prisma generate> to generate the Prisma Client. You can then start querying your database.

run all migation at once 
npx prisma migrate dev
**If no migtation availabe in prisma directory then run 
npx prisma migrate dev --name init

generate new migration after changing something in schema.prisma
npx prisma migrate dev --name <your_migartion_name>
<npx prisma generate> is called under the hood by default, after running prisma migrate dev.

Run <npx prisma format> to format schema.prisma

Usage

    prisma [command]

Commands

    init        Set up Prisma for your app
    generate    Generate artifacts (e.g. Prisma Client)
    db          Manage your database schema and lifecycle
    migrate     Migrate your database
    studio      Browse your data with Prisma Studio
    validate    Validate your Prisma schema
    format      Format your Prisma schema

Flags
    --preview-feature   Run Preview Prisma commands

Examples

  Set up a new Prisma project
  $ prisma init

  Generate artifacts (e.g. Prisma Client)
  $ prisma generate

  Browse your data
  $ prisma studio

  Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
  $ prisma migrate dev
  
  Pull the schema from an existing database, updating the Prisma schema
  $ prisma db pull

  Push the Prisma schema state to the database
  $ prisma db push

  Validate your Prisma schema
  $ prisma validate

  Format your Prisma schema
  $ prisma format

subhajit@CXLINLT108:~/Desktop/selfassignments/prisma$ npx prisma init

✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.