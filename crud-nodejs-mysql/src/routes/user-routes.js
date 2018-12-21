const user = require('../models/user')

module.exports = function (app) {


    app.get('/users', (req, res) => {
        user.getUsers((err, data)=>{
            res.status(200).json(data);
        });
    });
    app.post('/users', (req,res)=>{
        const userData = {
            id: null,
            user_name: req.body.user_name,
            pass_login: req.body.pass_login
        };
        user.insertUser(userData,(err,data)=>{
            if(data && data.insertId){
                res.json({
                    sucess:true,
                    msg: 'User insertado',
                    data: data
                })
            }else {
                res.status(500).json({
                    sucess: false,
                    msg : 'error'
                })
            }
        })
    });
}