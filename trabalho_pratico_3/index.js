import express from "express";
import animalRouter from "./routes/animal.route.js";
// import proprietarioRouter from "./routes/proprietario.route.js";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use("/animal", animalRouter);
// app.use("/proprietario", proprietarioRouter);

app.listen(PORT, () => console.log("api iniciada"));
