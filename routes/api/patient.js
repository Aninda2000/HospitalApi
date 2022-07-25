const express=require("express");
const router=express.Router();
const patientController= require('../../controllers/api/patient_controller');

router.post('/register',patientController.create);
router.post('/:id/create-report',patientController.createReport);

router.get('/:id/all-reports',patientController.allReports);

module.exports=router;