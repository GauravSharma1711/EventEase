
import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";

export const signup = async (req,res)=>{
    try {
    
        const {username,fullName, email,role,password} = req.body;

        if(!username || !fullName || !email || !role || !password){
            return res.status(400).json({error:"All fileds are required"});
        }

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({error:"User already exists"});
        }

          const hashedPassword = await bcrypt.hash(password,10);

           const user = new User({
           username,
          fullName,
          email,
          password: hashedPassword,
          role
    })


      await user.save();

      const { password: _, ...safeUser } = user._doc;


  return res.status(201).json({ user: safeUser, message: "User created successfully" });

    } catch (error) {
        console.log("Erorr in signup controller",error);
        return res.status(500).json({error:"Internal server error"});
        
    }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found, signup first" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    generateTokenAndSetCookie(user._id, res);

       const { password: _, ...safeUser } = user._doc;

    return res.status(200).json({
      message: "Logged in successfully",
      user: safeUser,
    });

  } catch (error) {
    console.log("Error in login controller", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};


export const logout = async (req,res)=>{
       try {
          res.clearCookie('jwt', {
         httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
         sameSite: 'strict'
     });

  res.status(200).json({ message: 'Logged out successfully' });
       } catch (error) {
          console.log("Erorr in logout controller",error);
        return res.status(500).json({error:"Internal server error"});
       }
}