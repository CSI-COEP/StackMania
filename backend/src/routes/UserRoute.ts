import { Router } from "express";
import { CourtRequest } from "../../typings/custom";
import { findCases, findUserWithEmail } from "../lib/database/database";

const router = Router();

router.get("/", async (req: CourtRequest, res) => {
  if (!req.user) {
    res.status(401).json({
      error: true,
      message: "Unauthorized, no user found",
    });
    return;
  }

  const databaseData = await findUserWithEmail(req.user.email!!);
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

router.get("/cases", async (req: CourtRequest, res) => {
  if (!req.user) {
    res.status(401).json({
      error: true,
      message: "Unauthorized, no user found",
    });
    return;
  }

  const databaseData = await findCases({
    by: req.user.email!!,
  });
  console.log(databaseData);
  if (!databaseData) {
    res.status(500).json({
      error: true,
      message: "Database error",
    });
    return;
  }

  res.json({
    databaseData,
  });
});

export default router;
