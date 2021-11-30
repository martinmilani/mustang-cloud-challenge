import { Router } from "express";

import { renderTeams } from "../controllers/teams.controller";

const router = Router();

router.get("/", renderTeams);

router.get("/posiciones", (req, res) => {
  res.redirect("/");
});

router.get("*", (req, res) => {
  res.render("notfound");
});

export default router;
