import express, { Express } from 'express';
import cors from 'cors';
import router from './routes';

const app: Express = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${3000}`);
});
