import express from 'express';
import mongoose from "mongoose"
import dotenv from 'dotenv'
import { errorHandler, errorNotFoundHandler } from "./src/middlewares/errorHandler";
import { index } from "./src/routes"
import { products } from "./src/routes/products"
import bodyParser from 'body-parser';
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

mongoose.connect("mongodb://root:example@localhost", () => {
  console.log('connected to db')
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

