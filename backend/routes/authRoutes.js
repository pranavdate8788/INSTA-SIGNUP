const express=require('express');
const authRouter=express.Router();


const cookieParser=require('cookie-parser')
const {signupValidator,loginValidator,authenticateUser}=require("../midllewares/jwtauth.js")
const {signupInsta,login,getuser}=require('../controller/userController.js')

authRouter.post("/signupInsta",signupValidator,signupInsta);
authRouter.post("/login",loginValidator,login);
authRouter.get('/getuser',authenticateUser,getuser);


module.exports=authRouter;