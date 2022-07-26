const express=require("express");
const router=express.Router();
const reportController=require('../../controllers/api/report_controller');

router.get('/:status', reportController.reportStatus);

module.exports=router;