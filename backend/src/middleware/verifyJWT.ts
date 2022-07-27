import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";


function verifyToken(req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers['authorization'];
    const token = authHeader && !Array.isArray(authHeader) && authHeader.split(' ')[1];

    console.log(req)
    if (token == null) return res.status(401).send({auth:false, message:'Token Not Provided.'}); 

    if(typeof(token) == 'string')
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!, (err) => {
            if (err) return res.status(403).send({auth:false, message:'Failed To Verified Token.'})
            next();
        })
};
export default verifyToken;