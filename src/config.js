import { config } from "dotenv";

config();

export const MONGODB_URI = process.env.MONGODB_URI;
export const INTERVAL_TIME = process.env.INTERVAL_TIME;
