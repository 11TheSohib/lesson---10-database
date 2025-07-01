import express from "express";
import dotenv from 'dotenv'
import indexRouter from './routes/index.route.js'

dotenv.config();

const PORT = process.env.PORT || 6991;
const app = express();

app.use(express.json());
app.use(`/`, indexRouter)

app.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}`);
});
