import express from "express";
import { IndexRoutes } from "./routes/index.js";
import dotenv from "dotenv";

dotenv.config();
const app : express.Express = express();
app.disable('x-powered-by');

IndexRoutes.groupRoutes(app);

app.listen(process.env.APP_PORT, ()=>{
    console.log(`APP working \nPORT: ${process.env.APP_PORT}`);
});