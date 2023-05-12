[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/4Y4godVE)

# Week 14 Dandi Rizky (Authentication and Authorization)

---

For this week assignment, i'm trying to make an authentication/authorization using session token on RESTAPI that i've been created on week 13 so only users that already registered can access the resource endpoint.

## Installation 🔨

---

In order to run this project locally, you need to clone this repository first using git clone

```bash
$ https://github.com/revou-fsse-1/w14-my-authorized-api-DandiRizkyy.git
```

then run `yarn install` in your terminal to download all dependencies

```bash
$ pnpm install
```

create `docker-compose.yaml` on root folder (where the package.json installed) and fill with these commands to install postgresql database locally on your computer

```
version: "3"
services:
  postgres:
    image: postgres:14
    ports:
    - 5432:5432
    environment:
    - POSTGRES_DB=revou
    - POSTGRES_USER=revou
    - POSTGRES_PASSWORD=password
    volumes:
    - ./postgres-data:/var/lib/postgresql/data
  pgadmin:
    image: dpage/pgadmin4
    environment:
      - PGADMIN_DEFAULT_EMAIL=user@gmail.com
      - PGADMIN_DEFAULT_PASSWORD=password
    ports:
      - 15432:80

```

don't forget to create `.env` files on root folder same like before with these command:

```
DATABASE_URL="postgresql://revou:password@localhost:5432/revou?schema=public"
```

and run docker with these command:

```
docker-compose up -d
```

after that you can start the server using these following command :

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

if you want to stop docker, you can use these command

```
docker-compose stop
```

## Documentation 📷

---

### Postman Documentation

You can follow my documentation on `postman`: [Link](https://documenter.getpostman.com/view/24409630/2s93ecuUx2)

---

### Endpoint Documentation (Railway Endpoint)

1. First of all, all you need to do is registering your email and password first using the following links

- RestAPI `register` Links : https://w14-my-authorized-api-dandirizkyy-production.up.railway.app/auth/register

  ```
  || Register Endpoint ||

  POST     /auth/register
  ```

2. After that, you can login with email and password that you registered before

- RestAPI `login` Links : https://w14-my-authorized-api-dandirizkyy-production.up.railway.app/auth/login

  ```
  || Login Endpoint ||

  POST     /auth/login
  ```

3. After you successfully login, you can access the resources endpoint such as `users` and `products`.

- RestAPI `users` Links : https://w14-my-authorized-api-dandirizkyy-production.up.railway.app/users

  ```
  || Users Endpoint ||

  GET     /users
  ```

- RestAPI `products` Links : https://w14-my-authorized-api-dandirizkyy-production.up.railway.app/products

  ```
  || Products Endpoint ||

  GET     /products
  GET     /products/1
  POST    /products
  PUT     /products/1
  PATCH   /products/1
  DELETE  /products/1

  ```

4. Anddd for the last step.. dont forget to logout :)

- RestAPI `logout` Links : https://w14-my-authorized-api-dandirizkyy-production.up.railway.app/auth/logout

  ```
  || Logout Endpoint ||

  POST     /auth/logout
  ```

## Technologies 💻

---

- NestJS
- Typescript
- PrismaORM
- PostgreSQL
- Docker
- Postman

## Support

---

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
