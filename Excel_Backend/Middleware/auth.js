// const jwt=require('jsonwebtoken');
// module.exports=(req,res,next)=>{
//     const token=req.haeders.authorization;
//     if(!token) return res.status(401).json({error:'Access denied'});
//      try{
//         const verified=jwt.verify(token,process.env.JWT_SECRET);
//         req.user=verified;
//         next();

//      }catch
//      {
//         res.status(400).json({error:'Invalid token'});
//      }
// };

const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized, token missing" });
  }

  token = token.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // id, role, email
    next();
  } catch (error) {
    res.status(401).json({ message: "Not authorized, token invalid" });
  }
};

module.exports = { protect };
