/** * Config file */
import dotenv from 'dotenv';
dotenv.config();
const config = {
  db: process.env.DB ?? '',
  jwtSecret: process.env.JWT_SECRET ?? '',
  port: process.env.PORT,
  allowedOrigins: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://yourapp.com',
    'http://127.0.0.1:5000',
    'http://localhost:5000'
  ]
};

export default config;
