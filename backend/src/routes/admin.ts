import { Router } from "express";
import { CourtRequest } from "../../typings/custom";
import { createUser } from "../lib/auth";
import { addUser } from "../lib/database";
import prisma from "../lib/prisma";

const router = Router();

router.post("/add-user", async (req: CourtRequest, res) => {
  if (!req.user) {
    res.status(401).json({
      error: true,
      message: "Not logged in",
    });
  }

  const { email, password, role } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email,
      isMainAdmin: true,
      role: "MAIN_ADMIN",
    },
  });

  if (!user) {
    res.status(401).json({
      error: true,
      message: "Unauthorized",
    });
  }

  const createdUser = await createUser(email, password);

  if (!createdUser) {
    res.json({
      error: true,
      message: "User not created",
    });
    return;
  }

  const databaseRoleUser = await addUser(email, role);

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

export default router;
