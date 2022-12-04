import express, { Application, Request, Response } from "express";
const PORT: number = 2000;
const app: Application = express();
import router from "./router/studentRouter";
app.use(express.json());

require("./config/db.ts");

app.get("/", (req: Request, res: Response): Response => {
  return res.status(200).json({
    message: "Server Up and Running 🚀🚀",
  });
});
app.use("/api", router);
app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`);
});
