import express from "express";
import { getResult } from "./calc";

const result = getResult();
const app = express();
const PORT = 3000;

app.get("/", (req, res) =>
  res.send(`Showing a correct ${result} on port ${PORT}`)
);

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
