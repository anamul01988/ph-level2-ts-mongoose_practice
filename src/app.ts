import express, { Application } from "express";
import cors from "cors";

const app: Application = express();//Application express theke nici typescript er jonno
//application routes
import userRoutes from './app/modules/user/user.route';

//using cors
app.use(cors());

//parse data
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// app.get("/api/v1/user", userRoutes);
app.use("/api/v1/user", userRoutes); //get to pore use korteci tai use keyword use kora lgbe aita base url hishebe kaj korbe

export default app;

//router-> controller ->service->model
/* breakdown ...
Interface, Interface => interface.ts
Schema, Model-> model.ts

route
route function -> controller.ts
database query function ->service


*/