import jwt from "jsonwebtoken";
const isAuthenticated = async (req,res,next)=>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({
                message:'User not authenticated',
                success:false
            });
        }
        const jwtSecret = 'hdjahfhdfhiewnhqxiwendewnniewirn4r';
        
        if (!jwtSecret) {
            throw new Error('JWT_SECRET is not set');
        }
        const decode = await jwt.verify(token, jwtSecret);
        if(!decode){
            return res.status(401).json({
                message:'Invalid',
                success:false
            });
        }
        req.id = decode.userId;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: 'Unauthorized', success: false });
    }
}
export default isAuthenticated;