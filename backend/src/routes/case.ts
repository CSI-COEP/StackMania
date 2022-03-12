import { Response, Router } from "express";
import { CourtRequest } from "../../typings/custom";
import { createUser } from "../lib/auth";
import { addUser, createCase, findUser } from "../lib/database/database";
import prisma from "../lib/prisma";

const router = Router();

router.post("/create", async (req: CourtRequest, res: Response) => {
  if (!req.user) {
    res.status(401).json({
      error: true,
      message: "Not logged in",
    });
    return;
  }

  const { byMail, forMail, lawyerMail, documentId, bookedUnder } = req.body;

  const stationMail = await findUser(req.user?.email!!, "POLICE");

  if (!stationMail) {
    res.status(401).json({
      error: true,
      message: "Station not valid",
    });
    return;
  }

  const lawyer = await findUser(lawyerMail, "LAWYER");

  if (!lawyer) {
    res.status(401).json({
      error: true,
      message: "Lawyer not found",
    });
    return;
  }

  let user = await findUser(byMail, "USER");

  if (!user) {
    await createUser(byMail, "123");
    user = await addUser(byMail, "USER");
  }

  let forUser = await findUser(forMail, "USER");

  if (!forUser) {
    await createUser(forMail, "123");
    forUser = await addUser(forMail, "USER");
  }

  const caseCreated = await createCase({
    policeStation: stationMail.email,
    lawyer: lawyer.email,
    by: user.email,
    for: forUser.email,
    bookedUnder,
    documentId,
  });

  if (!createCase) {
    res.status(500).json({ error: true, message: "Error creating case" });
    return;
  }

  res.json(caseCreated);
});

export default router;
