import { Request, Response} from 'express'
import { comparePassword, hashPassword } from '../services/passwordServices'
import { generateToken } from '../services/auth.service'
import prisma from '../models/user.prisma'

export const register = async(req: Request, res: Response): Promise<void> => {
    const {email, password} = req.body

    try{
        if(!email || !password){
            res.status(400).json({message:'Los campos "email" y "password" son obligatorios'})
            return
        }
        const hashedPassword = await hashPassword(password)
        console.log(hashedPassword)
        
        const user = await prisma.create(
            {
                data: {
                    email,
                    password: hashedPassword,
                }
            }
        )

        const token = generateToken(user)
        res.status(201).json({token})

    }catch(error){
        console.log(error)
        res.status(500).json({message:'Hubo un error en el servidor'})
    }    
}

export const login = async(req: Request, res: Response): Promise<void> => {

    const {email, password} = req.body

    try{

        if(!email || !password){
            res.status(400).json({message:'Los campos "email" y "password" son obligatorios' })
            return
        }
        const user= await prisma.findUnique({where: {email}})
        if(!user){
            res.status(404).json({message:'El usuario y contraseña no coinciden'})
            return
        }

        const passwordMatch = comparePassword(password, user.password)
        if(!passwordMatch){
            res.status(401).json({message:'Usuario y contraseñas incorrectas'})
        }

        const token = generateToken(user)
        res.status(200).json({token})

    }catch(error: any){
        console.log('error:', error)
    }

}
