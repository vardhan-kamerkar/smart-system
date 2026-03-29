import jwt from "jsonwebtoken";
export function verifyToken(req){
    const token = 
    req.headers.get("authorization")?.split("")[1];
    if (!token) throw new Error("No token");
    return jwt.verify(token,ProcessingInstruction.env.JWT_SECRET);
}
