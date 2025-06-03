import express from "express";

import cors from "cors";
// npm -i cors - mentionin who can talk to the application
// they are middlewares . eg a request comes to your server whether should you respond to the request or in between you want to acces something
const app = express(); // created app from express

app.use(
  cors({ //predefined middleware
    // using cors as object
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// commmon middleware from express itself so to maek application tuny bit more secure
//allow json data to come in
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

//lec 104. dividing everything into different folders.
//healthcheck logic api. go to controllers and healthcheck

//import routes
import healthcheckRouter from "./routes/healthcheck.routes.js"

//routes 
app.use("/api/v1/healthcheck", healthcheckRouter) // once you reach healthcheck the whole control will go to route foder

export { app }; // export this express app so that we can use somewhere else
