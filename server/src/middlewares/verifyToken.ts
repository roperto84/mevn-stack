import jwt from 'jsonwebtoken'

export interface IPayload {
    id: string;
    iat: number;
}

export const verifyToken = async(req: any, res: any, next: any) => {
	
	try {
		const authorization = req.headers.authorization || req.cookies.auth._token.local || req.headers['x-access-token']
		const token = authorization.split(" ");

		if(!token) return res.status(401).json({success: false, message: "No token provided"})
		
		const payload = jwt.verify(token[1], process.env['TOKEN_SECRET'] || '') as IPayload;
		//req.params.id = payload.id;
		next()
	} catch (error) {
		res.status(400).send('Invalid Token');
	}

};