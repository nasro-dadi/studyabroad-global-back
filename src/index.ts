import express from "express";
import { searchController } from "./controllers/search-controller";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/search", searchController);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
