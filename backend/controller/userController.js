const Users=require('../schema/userSchema.js')
const bcrypt=require("bcrypt")
const JWT=require("jsonwebtoken")
exports.signupInsta = async (req, res) => {
    try {
      const { name, mail, username, phone, password } = req.body;
      if (!name || !username || !password || !phone || !mail) {
        throw new Error("All fields are required ");
      }
      const user = await Users.create({
        name,
        mail,
        username,
        phone,
        password
      });
      res.status(201).json({
        success: true,
        message: "User Signup successful",
        data: { user }
      });
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).json({
          success: false,
          message: 'User already registered with this email',
        });
      } else {
        console.log(error);
        res.status(400).json({
          success: false,
          message: error.message,
        });
      }
    }
  }
  exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            throw new Error("All fields are required");
        }

        const user = await Users.findOne({
            username
        }).select('+password');

        if (!user || !(await bcrypt.compare(password,user.password))) {
            throw new Error('Invalid credentials');
        }

        const token = user.jwtToken();
        user.password = undefined;
    
        const cookieOption = {
           maxAge:24*60*60*1000,
          httpOnly: true 
        };
    
        res.cookie("token", token, cookieOption);

      
        res.status(200).json({
            success: true,
            message: "User signin successfully",
            data: user
        });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({
                success: false,
                message: 'User already registered with this username',
            });
        } else {
            console.log(error);
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    }
};
exports.getuser = async (req, res) => {
    const {id,username}=req.user;
    try {
        const userData = await Users.findById({username})
        
       return res.status(200).json({
            success: true,
            data:userData
        })
    } catch (error) {
        console.log(error);
         return res.status(400).json({
            success: false,
            message: error.message,
        })
    }
};