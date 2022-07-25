const mongoose =require('mongoose');

const reportSchema=new mongoose.Schema({
    patientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'patients',
        required:true
    },
    createdDoctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'doctors',
        required:true
    },
    status:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const Report =mongoose.model('reports',reportSchema);
module.exports=Report;