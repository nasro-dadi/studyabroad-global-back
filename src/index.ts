import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { searchController } from "./controllers/search-controller";
import { validateQuery } from "./middlewares/validator";
import { searchQuerySchema } from "./schemas/search-schema";

dotenv.config();

const app = express();
const corsWhitelist = process.env.CORS_WHITELIST;
app.use(
  cors({
    origin: corsWhitelist?.split(","),
    methods: ["GET"],
    allowedHeaders: "*",
  })
);
const port = process.env.PORT ?? 3001;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/search", validateQuery(searchQuerySchema), searchController);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
