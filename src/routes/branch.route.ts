import { Router } from "express";

import { CreateBranch } from "../controllers/branch.controller";

const router = Router();

router.post("/branches", CreateBranch);

export default router;