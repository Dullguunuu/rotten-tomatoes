"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const movie_routes_1 = __importDefault(require("./routes/movie.routes"));
const comment_routes_1 = __importDefault(require("./routes/comment.routes"));
const theater_routes_1 = __importDefault(require("./routes/theater.routes"));
dotenv_1.default.config();
const uri = process.env.MONGO_DB_URI || "";
mongoose_1.default
    .connect(uri)
    .then(() => console.log("DB Successfully connected"))
    .catch((err) => console.log(err));
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", movie_routes_1.default);
app.use("/api", comment_routes_1.default);
app.use("/api", theater_routes_1.default);
app.get("/api", (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
