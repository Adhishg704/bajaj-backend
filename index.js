import express from 'express';
import cors from 'cors';
import router from './routes/bajaj.route.js';

const app = express();
const PORT = 5000;

app.use(cors());

app.use(express.json());

app.use('/', router);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});