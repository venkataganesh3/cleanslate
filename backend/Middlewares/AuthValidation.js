

const joi= require('joi');

const signupValidation=(req,res,next)=>{
    const schema=joi.object({
        name:joi.string().min(3).max(100).required(),
        email:joi.string().email().required(),
        password:joi.string().min(4).max(100).required(),
        cpassword:joi.string().min(4).max(100).required(),
    })
    const {error}=schema.validate(req.body);
    if(error){
        return res.status(400).json({message:"Error in signupvalidation middleware",error:error.details[0].message});
    }
    next();
}


const loginValidation=(req,res,next)=>{
    const schema=joi.object({
        email:joi.string().email().required(),
        password:joi.string().min(4).max(100).required(),
    })
    const {error}=schema.validate(req.body);
    if(error){
        return res.status(400).json({message:"Error in loginvalidation middleware",error:error.details[0].message});
    }
    next();
}

module.exports={
    signupValidation,
    loginValidation
}