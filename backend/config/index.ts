/** * Config file */
import dotenv from 'dotenv';
dotenv.config();
const config = {
  db: process.env.DB ?? '',
  jwtSecret: process.env.JWT_SECRET ?? '',
  port: process.env.PORT,
  allowedOrigins: [
    'http://localhost:3000',
    'http://yourapp.com',
    'http://localhost:4020'
  ]
};

export default config;
