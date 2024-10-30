import express, {Application} from "express";
import { PORT as port} from "./utils/envConfig"

const PORT = Number(port) || 8000;

const app: Application = express();

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});