const express=require("express");
const router=express.Router();
const doctorController=require('../../controllers/api/doctor_controller');

router.post('/register',doctorController.create);
router.post('/login',doctorController.createJwt);

module.exports=router;