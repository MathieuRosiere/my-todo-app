# my-todo-app

> Application created during Web Developer training.

## Installation

If you want to test the application you need to install [Node.js](https://nodejs.org/) first. This will install the **Node Packet Manager** too.

Once it's done you can :

1. Fork the repo (click the <kbd>Fork</kbd> button at the top right of [this page](https://github.com/MathieuRosiere/my-todo-app))

2. Clone your fork locally.

```sh
git clone https://github.com/<your_github_username>/my-todo-app.git
cd care-front
```

3. Setup all dependencies and packages by running `npm install`. This command will install dependencies.

4. Use the command `npm run dev` to run the app.

## Database

1. The application needs a database to run. I use [MySQL](https://dev.mysql.com/downloads/installer/) and I recommend you do the same, otherwise you will need to make some modifications in the application back-end.

2. Next go to `my-todo-app/server/libs/sequelize.js` and use your own credentials to connect to your database.

3. We're going to generate the tables in the db using [Sequelize](https://sequelize.org/).

    - Install `Thunder Client` extension.
    - Send a request to `localhost:3000/api/db/sync`

4. There is no authentication yet, so we need to manually create a user :

```sql
INSERT INTO Users (id, username, password, email, createdAt, updatedAt)
    VALUES ('1', 'John', '1234','john.doe@email.com', '2024-01-01','2024-01-01');
```

(You can put other values but **keep the id value at 1.**)

## Development

### Technologies

-   [Nuxt.js](https://nuxt.com/) : Framework
-   [Tanstack Query](https://tanstack.com/query/latest/docs/framework/vue/overview) : caching
-   [Sequelize](https://sequelize.org/) : ORM
-   [MySQL](https://dev.mysql.com/downloads/installer/) : Database
-   [Zod](https://zod.dev/) : schema validation

### Tooling

-   [Husky](https://typicode.github.io/husky/) : to use git hooks.
-   [Prettier](https://prettier.io/) : code formatter
-   [ESlint](https://eslint.nuxt.com/) : code linter
-   [EditorConfig](https://editorconfig.org/) : define coding styles
-   [Lint-staged](https://github.com/lint-staged/lint-staged) : simplify scripts execution with git hooks.
