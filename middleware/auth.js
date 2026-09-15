import jwt from "jsonwebtoken"

const segredo = " meusegredo "

export default async function authMiddleware(req,res,next ) {
console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAQUI")
try {
// verficar se o JWT é valido      

const token = req.headers['authorization']
console.log(token)
if(!token) {
    throw new Error()
}

const decoded = jwt.verify(token, segredo)

console.log(decoded)
next()
} catch (error) {
    res.status(403).send({
        Message: " Usuario e senha invalido "
    })
}

}