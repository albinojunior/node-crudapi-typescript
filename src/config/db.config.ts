import { resolve } from "path";

export const config = {
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "db_name",
  dialect: process.env.DB_DRIVER || "mysql",
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  storage: ':memory:',
  modelPaths: [resolve("dist/app/modules/**/*.model.js")]
}
