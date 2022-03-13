import { Response, Router } from "express";
import { CourtRequest, SearchQuery } from "../../typings/custom";
import { createUser } from "../lib/auth";
import {
  addUser,
  createCase,
  findCases,
  findUserWithRole as findUser,
} from "../lib/database/database";

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

  console.log(req.body);

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

router.get("/getall", async (req: CourtRequest, res: Response) => {
  if (!req.user) {
    res.status(401).json({
      error: true,
      message: "Not logged in",
    });
    return;
  }
  if (!req.user) {
    res.status(401).json({
      error: true,
      message: "Not logged in",
    });
    return;
  }

  const user = await findUser(req.user?.email!!, "MAIN_ADMIN");
  const query: SearchQuery =
    req.query && req.query.closed
      ? { closed: req.query.closed as unknown as boolean }
      : {};

  if (!user) {
    res.status(401).json({
      error: true,
      message: "Unauthorized",
    });
    return;
  }

  const cases = await findCases(query);

  if (cases === undefined) {
    res.status(500).json({ error: true, message: "Error getting cases" });
    return;
  }

  res.json({ cases });
});

export default router;
