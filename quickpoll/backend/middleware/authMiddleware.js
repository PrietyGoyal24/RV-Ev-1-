function protectRoute(req,res,next){
    const authHeader = req.headers['authorization'];
    if(authHeader==='Bearer MY_SECRET_TOKEN'){
        next();
    }else{
        res.status(403).json({message:"Foebidden- Invalid Token"});
    }
}

Module.exports= protectRoute;