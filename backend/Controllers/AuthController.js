const UserModel = require("../Models/User");
const bcrypt = require('bcrypt');


const jwt=require('jsonwebtoken');

const signup = async (req, res) => {
    try{
        console.log(req.body);
        const {name,email,password,cpassword}=req.body;
        const user=await UserModel.findOne({email: email.trim().toLowerCase()});
        if(user){
            return res.status(400).json({error:'Email already exists'});
        }
        
        const newuser=new UserModel({name,email,password,cpassword});
        
        newuser.password=await bcrypt.hash(password,10);
        console.log(newuser);
        await newuser.save();
        res.status(201).json({
            message:'User registered successfully',
            sucess:true
        });
    } catch (error) {
        res.status(500).json({error:'Internal server error',sucess:false});
    }
}

const login = async (req, res) => {
    try{
        const {email,password}=req.body;
        const user=await UserModel.findOne({email});

        if(!user){
            return res.status(403).json({error:'User not exist'});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(403).json({error:'Invalid Password'});
        }
        const jwtToken=jwt.sign(
            {email:user.email,id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:'1h'}
        )

        res.status(200).json({message:'Login successful',
            sucess:true,
            name:user.name,
            email,
            token:jwtToken});
        
    } catch (error) {
        res.status(500).json({error:'Internal server error',sucess:false});
    }
}

module.exports={
    signup,
    login
}