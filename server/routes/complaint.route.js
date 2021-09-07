const { complaintController } = require("../controllers");
const { Router } = require('express');

const router = Router();

router
    .route('/')
    .get(complaintController.getAllComplaints)
    .post(complaintController.addComplaint)

module.exports = router;
