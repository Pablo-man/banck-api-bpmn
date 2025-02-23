import { config } from "dotenv";

config();

const dbHost = process.env.DB_HOST || "localhost";
const dbPort = process.env.DB_PORT || "27017";

export const MONGODB_URI = process.env.MONGODB_URI || `mongodb://${dbHost}:${dbPort}/userdb`;