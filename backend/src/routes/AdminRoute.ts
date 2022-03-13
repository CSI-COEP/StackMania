import { Router } from "express";
import { CourtRequest } from "../../typings/custom";
import { createUser } from "../lib/auth";
import {
  addUser,
  findCases,
  findUserWithRole as findUser,
} from "../lib/database/database";

const router = Router();

router.use(async (req: CourtRequest, res, next) => {
  if (!req.user) {
    res.status(401).json({
      error: true,
      message: "Not logged in",
    });
    return;
  }

  const user = await findUser(req.user?.email!!, "MAIN_ADMIN");

  if (!user) {
    res.status(401).json({
      error: true,
      message: "Unauthorized",
    });
    return;
  }

  next();
});

router.post("/add-user", async (req: CourtRequest, res) => {
  const { name, email, password, role } = req.body;

  const createdUser = await createUser(email, password);

  if (!createdUser) {
    res.json({
      error: true,
      message: "User not created",
    });
    return;
  }

  const databaseRoleUser = await addUser(email, role, name);

  if (!databaseRoleUser) {
    res.json({
      error: true,
      message: "User not created in database",
    });
    return;
  }

  res.json({
    createdUser,
    databaseRoleUser,
  });

  return;
});

router.get("/data", async (req: CourtRequest, res) => {
  const closedData = await findCases({ closed: true });
  const openData = await findCases({ closed: false });
  const allData = await findCases({});

  res.json({
    closedData,
    openData,
    allData,
  });
});

router.get("/cases", async (req: CourtRequest, res) => {
  const allData = await findCases({ state: "pending_confirmation" });

  res.json(allData);
});

export default router;
