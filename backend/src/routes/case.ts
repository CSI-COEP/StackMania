import { Response, Router } from "express";
import { CourtRequest } from "../../typings/custom";
import { createUser } from "../lib/auth";
import prisma from "../lib/prisma";

const router = Router();

router.post("/create", async (req: CourtRequest, res: Response) => {
  if (!req.user) {
    res.status(401).json({
      error: true,
      message: "Not logged in",
    });
  }

  const { byMail, forMail, lawyerMail, documentId, bookedUnder } = req.body;

  const stationMail = await prisma.user.findUnique({
    where: {
      email: req.user?.email,
      role: "POLICE",
    },
  });

  if (!stationMail) {
    res.status(401).json({
      error: true,
      message: "Station not valid",
    });
    return;
  }

  const lawyer = await prisma.user.findUnique({
    where: {
      byMail: lawyerMail,
      role: "LAWYER",
    },
  });

  if (!lawyer) {
    res.status(401).json({
      error: true,
      message: "Lawyer not found",
    });
    return;
  }

  let user = await prisma.user.findUnique({
    where: {
      byMail,
      role: "USER",
    },
  });

  if (!user) {
    await createUser(byMail, "123");
    user = await prisma.user.create({
      data: {
        email: byMail,
      },
    });
  }

  let forUser = await prisma.user.findUnique({
    where: {
      byMail: forMail,
      role: "USER",
    },
  });

  if (!forUser) {
    await createUser(forMail, "123");
    forUser = await prisma.user.create({
      data: {
        email: forMail,
      },
    });
  }

  const caseCreated = await prisma.case.create({
    data: {
      policeStation: req.user?.email,
      lawyer: lawyerMail.mail,
      by: byMail,
      for: forMail,
      documentId: documentId ?? [],
      bookedUnder: bookedUnder,
    },
  });

  res.json(caseCreated);
});

export default router;
