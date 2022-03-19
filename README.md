# Working Time tracker
Coded with Symfony framework

## Installation

### Packages

After cloning the project, install the packages for Symfony and React:

```bash
# install symfony packages:
composer install

# install webpack-encore and react packages:
npm install
```

### Database

In this project, I use a PostgreSQL database with Docker. But feel free to edit the `.env` file with your configuration.

```bash
# start the docker database:
docker-compose up -d
```

### Initial setup

Now you can run the classic Symfony commands to create the database. I use fixtures to create a set of data. You may want to skip this step.

```bash
# create the database:
php bin/console doctrine:database:create

# apply the migrations to create the tables in the database:
php bin/console doctrine:migration:migrate

# load fixtures:
php bin/console doctrine:fixtures:load

# generate JWT keys
php bin/console lexik:jwt:generate-keypair
```

### Development environment

I use the tools provided by Symfony and Webpack-encore to start a development server.

```bash
# start the dev-server to generate a webpack-encore build when you made changes in files:
npm run dev-server

# start Symfony server
php bin/console server:start -d
```

That's it!
