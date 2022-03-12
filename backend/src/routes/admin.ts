import { Router } from "express";
import { createUser } from "../lib/auth";

const router = Router();

router.post("/add-user", async (req, res) => {
  const { email, password } = req.body;

  const user = await createUser(email, password);

  if (!user) {
    res.json({
      error: true,
      message: "User not created",
    });
    return;
  }
});

export default router;
