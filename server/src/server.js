
import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.listen(process.env.API_PORT, () => {
  console.log(`Server started and listening on port ${process.env.API_PORT}`);
});


