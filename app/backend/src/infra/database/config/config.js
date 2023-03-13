"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '123456',
    database: 'PDV_HOTEL',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 33060,
    dialect: 'mysql',
    
};
module.exports = config;
