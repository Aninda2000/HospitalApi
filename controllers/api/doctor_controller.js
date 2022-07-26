const Doctor=require('../../models/doctors');
const jwt = require('jsonwebtoken');

//register route fuction
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

//log in route function
module.exports.createJwt=function(req,res){
    Doctor.findOne({username:req.body.username},function(err,docs){
        if(err){
            return res.status(500).json({"msg":"Internal Server Error"});
        }
        if(!docs || docs.password!= req.body.password){
            return res.status(200).json({"msg":"Invalid username/password"});
        }else{
            return res.status(200).json({"msg":"username find successfully","token":jwt.sign({
                doctorId: docs._id,
                username: docs.username,
                password:docs.password
              }, 'aninda', { expiresIn: "1h" })});
        }
    })
}