// import express and supporting middleware
import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

// import dotenv for dev environment
import dotenv from 'dotenv';

// import router
import router from './routes/routes';

// import database connection utility
import dbConnect from './utils/db.utils';

// dotenv initialization
dotenv.config();

// Connect to the database
dbConnect();

// initialize express
const app = express();

// use middleware
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

// use signout routes
app.use(router);

// server to listen on preset port
app.listen(process.env.API_PORT, () => {
  console.log(`Server started and listening on port ${process.env.API_PORT}`);
});
