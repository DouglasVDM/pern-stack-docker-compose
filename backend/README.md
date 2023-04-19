# backend

## cd backend

### add a .env file

```
touch .env
```

```
SERVER_PORT = 5001
POSTGRES_HOST = localhost
POSTGRES_USER = postgres
POSTGRES_PASSWORD = password 
POSTGRES_DB = testdb

```
PORT = 

DB_USER = [ your postgres user ]

DB_PASSWORD = [ your postgres user password ]

DB_HOST = [ for me it's localhost ]

DB_NAME =  [ your database name ]

DB_PORT = [ postgres port usually 5432 ]

## Git commands for the terminal

### Status

git status

### Multiline commit message

git commit index.js -m "Note the Changes" -m "- Fixed a bug"

`---
---
# Postgresql
---
---

## How start start stop PostgrSQL on Ubuntu

```
sudo systemctl stop postgresql
sudo systemctl start postgresql
sudo systemctl restart postgresql
sudo systemctl status postgresql
```

## Docker
### If you need to go inside the container you can use the exec command:

```
docker exec -it <container id> /bin/bash
```
