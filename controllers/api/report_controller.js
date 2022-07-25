const Report=require('../../models/report');
module.exports.reportStatus= function(req,res){
    Report.find({status:req.params.status},function(err,reports){
        if(err){
            return res.status(500).json({
                "msg": "Internal Server Error",    
            })
        }
    })
}