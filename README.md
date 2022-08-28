## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn  start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

### Run the app with docker

Make sure `docker` is intalled in your system.

Run the app with docker compose:
Before running with docker create a volume **pg_data** for postgres database:

```bash
docker volume create pg_data

```

```bash
docker-compose up

```

Run docker-compose in detached mode: 
```
docker-compose up -d

```
### Stop the application
```
docker-compose down

```