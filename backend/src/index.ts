require("dotenv").config();
import cors from "cors";
import express, { NextFunction, Response } from "express";
import { CourtRequest } from "../typings/custom";
import { verifyToken } from "./lib/auth";
import { findUser } from "./lib/database/database";
import AdminRoute from "./routes/AdminRoute";
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

app.use("/admin", AdminRoute);
app.use("/case", CaseRoute);

app.get("/", async (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/user", async (req: CourtRequest, res) => {
  if (!req.user) {
    res.status(401).json({
      error: true,
      message: "Unauthorized",
    });
    return;
  }

  const databaseData = await findUser(req.user.email!!);
  if (!databaseData) {
    res.status(500).json({
      error: true,
      message: "Database error",
    });
    return;
  }

  res.json({
    user: req.user,
    dbUser: databaseData,
    role: databaseData.role,
  });
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`🚀 Server ready at: ${process.env.PORT || 3000}`)
);
function CaseRoute(arg0: string, CaseRoute: any) {
  throw new Error("Function not implemented.");
}
