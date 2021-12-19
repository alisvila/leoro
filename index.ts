import express from 'express';
import { errorHandler, errorNotFoundHandler } from "./src/middlewares/errorHandler";
import { index } from "./src/routes"
// rest of the code remains same
const app = express();
const PORT = 3000;

app.set("port", process.env.PORT || 3000);
app.set("view engine", "pug");
app.use('/', index)

app.use(errorNotFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

