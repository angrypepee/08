import express, {Application} from "express";
import { PORT as port} from "./utils/envConfig"

import branchRouter from "./routes/branch.route";

const PORT = Number(port) || 8000;

const app: Application = express();

app.use("/branch-management", branchRouter)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});