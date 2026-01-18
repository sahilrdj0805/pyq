import express from "express";
import {
  getPendingRequests,
  approveRequest,
  rejectRequest
} from "../controllers/uploadRequestController.js";

const router = express.Router();

router.get("/pending", getPendingRequests);
router.put("/approve/:id", approveRequest);
router.put("/reject/:id", rejectRequest);

export default router;
