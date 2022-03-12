require("dotenv").config();
import cors from "cors";
import express, { NextFunction, Response } from "express";
import { CourtRequest } from "../typings/custom";
import { verifyToken } from "./lib/auth";
const app = express();

app.use(cors());
app.use(express.json());

app.use(async (req: CourtRequest, res: Response, next: NextFunction) => {
  if (req.headers && req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = await verifyToken(token);
    if (!decodedToken) {
      res.status(401).json({
        error: true,
        message: "Unauthorized",
      });
    }
    req.user = decodedToken;
  }

  req.user = null;

  next();
});

app.get("/", async (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`🚀 Server ready at: ${process.env.PORT || 3000}`)
);
