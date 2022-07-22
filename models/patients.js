const mongoose =require('mongoose');
const patientSchema=new mongoose.Schema({
    phoneNo:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const Patient =mongoose.model('patients',doctorSchema);
module.exports=Patient;