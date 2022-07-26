const patient=require('../../models/patients');
const report=require('../../models/report');

module.exports.create= function(req,res){
    patient.findOne({phoneNo:req.body.phoneNo},function(err,docs){
        if(err){
            return res.status(500).json({"msg":"error in finding patient"});
        }
        if(!docs){
            patient.create(req.body,function(err,docs){
                return res.status(200).json({"msg":"patient created  successfully","patient_Id":docs._id});
            });
            
        }else{
            return res.status(200).json({"msg":"patient already exist","patient_Id":docs._id});
        }
    })
}

module.exports.createReport=function(req,res){
    patient.findById(req.params.id,function(err,docs){
        if(err){
            return res.status(500).json({"msg":"error in finding patient"});
        }
        if(!docs){
            return res.status(200).json({"msg":"Invaid patient Id"});
        }else{
            report.create({
                patientId:req.params.id,
                createdDoctor:req.body.doctortId,//to do later
                status: req.body.status
            });
            return res.status(200).json({"msg":"patient report created  successfully"});
        }
    })
}

module.exports.allReports=function(req,res){
    patient.findById(req.params.id,function(err,docs){
        if(err){
            return res.status(500).json({"msg":"error in finding patient"});
        }
        if(!docs){
            return res.status(200).json({"msg":"Invaid patient Id"});
        }else{
            report.find({patientId:req.params.id},function(err,reports){
                if(err){
                    return res.status(500).json({"msg":"error in finding reports"});
                }
                let arr=[];

                for(let i of reports){
                    let obj={};
                    obj.doctortId=i.createdDoctor;
                    obj.status=i.status;
                    obj.time=i.createdAt;
                    arr.push(obj);
                }
                return res.status(200).json({"msg":"report fetched successfully","data":arr});
            });
            
        }
    });
}