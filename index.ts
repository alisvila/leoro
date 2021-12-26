import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';
import { errorHandler, errorNotFoundHandler } from "./src/middlewares/errorHandler";
import { index } from "./src/routes"
import { products } from "./src/routes/products"
import { User } from './src/models/users';

// rest of the code remains same
const app = express();
const PORT = 3000;
dotenv.config()

app.set("port", process.env.PORT || 3000);
app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', index)
app.use('/products', products)

app.use(errorNotFoundHandler);
app.use(errorHandler);

// app.use((req:Request, res:Response, next:NextFunction) => {
//   User.findById(req.session.user._id)
// })
mongoose.connect("mongodb://root:example@localhost", () => {
  console.log('connected to db')
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

