import { Router } from "express";
import { CourtRequest } from "../../typings/custom";
import { findUserWithRole } from "../lib/database/database";

const router = Router();

router.use(async (req: CourtRequest, res, next) => {
  if (!req.user) {
    res.status(401).json({
      error: true,
      message: "Not logged in",
    });
    return;
  }

  const user = await findUserWithRole(req.user?.email!!, "POLICE");

  if (!user) {
    res.status(401).json({
      error: true,
      message: "Unauthorized",
    });
    return;
  }

  next();
});

export default router;
