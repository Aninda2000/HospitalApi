const Doctor=require('../../models/doctors');
module.exports.create= function(req,res){
    Doctor.findOne({username:req.body.username},function(err,docs){
        if(err){
            return res.status(500).json({"msg":"error in database"});
        }
        if(!docs){
            Doctor.create(req.body);
            return res.status(200).json({"msg":"doctor registration successful"});
        }else{
            return res.status(200).json({"msg" : "username already exist"});
        }
    })
}