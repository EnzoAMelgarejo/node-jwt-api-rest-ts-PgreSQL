import { hashPassword } from "../services/passwordServices"
import { Request, Response } from "express"
import prisma from '../models/user.prisma'

export const createUser = async(req: Request, res:Response): Promise<void> => {
    try{
        const {email, password} = req.body
            if(!email || !password){
                res.status(400).json({message:'Los campos "email" y "password" son obligatorios' })
                return
            }
        const hashedPassword = await hashPassword(password)
        const user = await prisma.create(
            {
                data: {
                    email,
                    password: hashedPassword
                }
            }
        )
        res.status(201).json({user})
    }catch(error){
        console.log('error:', error)
        res.status(500).json({message:'Ocurrio un error en el servidor'})
    }
}

export const getAllUsers = async(req: Request, res:Response): Promise<void> => {
    try {
        const users = await prisma.findMany()
        res.status(200).json(users)
    } catch (error: any) {
        console.error(error)
        res.status(500).json({message:'Ocurrio un error en el servidor'})
    }
}

export const getUserById = async(req: Request, res:Response): Promise<void> => {
    
    const userId = parseInt(req.params.id)
    
    try {
        const users = await prisma.findUnique({where:{id:userId}})
        if (!userId) {
            res.status(404).json({message:'No se encontro el usuario'})
            return
        }
        res.status(200).json(users)
    } catch (error: any) {
        console.error(error)
        res.status(500).json({message:'Ocurrio un error en el servidor'})
    }
}

export const updateUser = async(req: Request, res:Response): Promise<void> => {
    const userId = parseInt(req.params.id)
    const {email, password} = req.body
    try {
        let dataToUpdate: any = {...req.body}
        if(password) {
            const hashedPassword = await hashPassword(password)
            dataToUpdate.password = hashedPassword
        }
        if (email) {
            dataToUpdate.email = email
        }

        const user = await prisma.update({where:{id:userId}, data:dataToUpdate})
        res.status(200).json(user)
    } catch (error: any) {
        console.error(error)
        res.status(500).json({message:'Ocurrio un error en el servidor'})
    }
}
 
export const deleteUser = async(req: Request, res:Response): Promise<void> => {
    const userId = parseInt(req.params.id)
    try {
        await prisma.delete({where:{id:userId}})
        res.status(200).json({message:'El usuario fue eliminado con exito'}).end()
    } catch (error: any) {
        console.error(error)
        res.status(500).json({message:'Ocurrio un error en el servidor'})
    }
}
