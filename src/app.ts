import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import todoRoutes from './routes';

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000;

app.use(cors())
app.use(todoRoutes)

const uri: string = 'mongodb+srv://aaronngdev:AaronNgDev2109@main.wt60bm6.mongodb.net/?retryWrites=true&w=majority'
const options = { useFindAndModify: false }


mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  });