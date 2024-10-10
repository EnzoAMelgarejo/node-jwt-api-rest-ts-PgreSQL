import express, { NextFunction } from "express";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/usersController";

const router = express.Router()
const JWT_SECRET = process.env.JWT_SECRET || 'default-secret'

//Midlewawre de JWT para verificar la autenticacion
const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(!token){
        res.status(401).json({message:'No autorizado'})
        return
    }
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if(err){
            console.error('Error en la autenticacion', err)
            res.status(403).json({message:'No tienes accesso a este recurso'})
        }

        next()

    })
}

router.post('/', authenticateToken, createUser)
router.get('/', authenticateToken, getAllUsers)
router.get('/:id', authenticateToken, getUserById)
router.put('/:id', authenticateToken, updateUser)
router.delete('/:id', authenticateToken, deleteUser)
export default router
