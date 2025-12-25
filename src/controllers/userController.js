const service = require("../services/userService");

exports.register = async(req,res,next)=>{
  try{
    const user = await service.register(req.body.email, req.body.password);
    res.status(201).json({ msg:"Registered successfully" });
  }catch(err){ next(err); }
};

exports.login = async(req,res,next)=>{
  try{
    const token = await service.login(req.body.email, req.body.password);
    res.json({ token });
  }catch(err){ next(err); }
};
