// Este archivo contiene funciones relacionadas con la autenticación de usuarios,
// específicamente para la generación de tokens JWT (JSON Web Tokens).
// El objetivo es crear un token seguro que se pueda utilizar para autenticar al usuario en las siguientes solicitudes.
// La función principal es:
// - `generateToken`: Esta función toma los datos del usuario (como el ID y el correo electrónico)
//   y genera un token JWT firmado con una clave secreta. Este token tiene una duración de 1 hora.

import { user} from '../models/user.interface'
import jwt from 'jsonwebtoken'

const JWT_SECRET= process.env.JWT_SECRET || 'default-secret'

export const generateToken = (user: user): string => {
    return jwt.sign({id:user.id, email:user.email}, JWT_SECRET, {expiresIn: '1h'})
}