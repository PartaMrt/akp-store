# db

To install Prisma:

To run:

```bash
cd packages/db
bun init
bun add prisma @prisma/client
bun add -d tsx dotenv
bunx prisma init
```

```bash
bunx prisma migrate dev --name init
bunx prisma generate
```

```
Add file .env

```



