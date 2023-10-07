const JWT=require('jsonwebtoken');
const { model } = require('mongoose');
exports.authenticateUser = async(req,res,next) =>{
    const token = req.cookies && req.cookies.token;
    if(!token) return res.status(404).send({msg:"user authentication failed",token:req.cookies})
    try {
        const payload =  JWT.verify(token, process.env.SECRET);
        req.user = { id: payload.id, username: payload.username };
        next()
      } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
      }
}
exports.signupValidator = (req,res,next) =>{
    const {name,mail,password,phone,username} = req.body;

    if(req.body && name && mail && password && phone && username){
        next()
    }else{
        res.status(404).send({msg:"all Input Fields are required"})
    }
}
exports.loginValidator = (req,res,next)=>{
    const {username,password} = req.body;
    if(req.body&&username&&password){
        next()
    }else{
        res.status(404).send({msg:"All input fields are required"})
    }
}
// module.exports=JWT;