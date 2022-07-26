const Report = require('../../models/report');
module.exports.reportStatus = function (req, res) {
    Report.find({ status: req.params.status }, function (err, reports) {
        if (err) {
            return res.status(500).json({
                "msg": "Internal Server Error",
            });
        }
        if (!reports) {
            return res.status(200).json({
                "msg": "No record found"
            });
        } else {
            let arr = [];

            for (let i of reports) {
                let obj = {};
                obj.patiendId=i.patientId;
                obj.doctortId = i.createdDoctor;
                obj.status = i.status;
                obj.time = i.createdAt;
                arr.push(obj);
            }
            return res.status(200).json({
                "msg":"reports getting successfully",
                "data": arr
            });
        }
    })
}