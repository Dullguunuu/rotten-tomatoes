import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import movieRoute from "./routes/movie.routes";
import commentRoute from "./routes/comment.routes";
import theaterRoute from "./routes/theater.routes";

dotenv.config();

const uri: string = process.env.MONGO_DB_URI || "";

mongoose
    .connect(uri)
    .then(() => console.log("DB Successfully connected"))
    .catch((err) => console.log(err))

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());

app.use("/api", movieRoute)
app.use("/api", commentRoute)
app.use("/api", theaterRoute)

app.get("/api", (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});