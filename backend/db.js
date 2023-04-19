const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
	host: process.env.POSTGRES_HOST,
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	port: process.env.POSTGRES_PORT,
	database: process.env.POSTGRES_DB
});

module.exports = pool;
