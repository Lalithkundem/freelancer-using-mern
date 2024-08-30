import dotenv from 'dotenv';
import express from 'express';
import connectDb from './config/dbConnection.js';
import errorHandler from './middleware/errorHandler.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { userRouter } from './routes/userRoutes.js';
import { freelancerRouter } from './routes/freelancerRoutes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);


const app = express();
const port = 5001;

const otpStore = {};
export default otpStore;

app.use(cors());
app.use(express.json());

app.use('/user', userRouter);
app.use('/dashboard', freelancerRouter);

app.use(errorHandler);
connectDb();
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
