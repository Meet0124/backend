import { Router } from "express";
import { healthcheck } from "../controllers/healthcheck.controllers.js";

const router = Router()
// where router will serve

router.route("/").get(healthcheck) // when someone get request with slash we return the healthcheck
export default router
