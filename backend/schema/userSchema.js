const mongoose=require('mongoose');
const JWT=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const userSchema=new mongoose.Schema({

name:{
    type:String,
    required:[true,"Name is req"]
},
phone:{
type:Number,
required:[true,"phone number is required"],
unique:true,
unique:[true,"user already registred with this number"],

},
username:{
    type:String,
    required:[true,"username is required"],
    unique:true,
    unique:[true,"try diffrent username"]
},
mail:{
    type:String,
    required:[true,"mail is required"],
    unique:true,
    unique:[true,"username already registred with this mail"]
},
password:{
    type:String,
    required:[true,"password is required"]
}

},
{
    timestamps:true
})
userSchema.methods={
    jwtToken(){
        return JWT.sign({id:this._id,username:this.username},process.env.SECRET,{
            expiresIn:'48h'
        })
    }
}

// to hash password before saving it
userSchema.pre("save",async function(next){
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12); //hashing password
    return next();
})
module.exports=mongoose.model("Users",userSchema);