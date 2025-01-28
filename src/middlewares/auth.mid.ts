import { verify } from "jsonwebtoken";


export default (req: any, res: any, next: any) => {
    const token = req.headers.access_token as string;
    if(!token) return res.status(401).send();

    try {
        const decodedUser = verify(token, "someRandomText");
        req.user = decodedUser;

    } catch (error) {
        res.status(401).send();
    }

    return next();
}