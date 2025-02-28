// Este archivo maneja las rutas relacionadas con la autenticación de usuarios, es decir, el registro y login de los usuarios.
// Utiliza Express para definir las rutas que permiten a los usuarios registrarse y autenticarse en el sistema.
// Las rutas definidas son:
// - `POST /register`: Permite a los usuarios registrarse proporcionando sus datos.
// - `POST /login`: Permite a los usuarios iniciar sesión con sus credenciales para obtener un token JWT.

import express from 'express'
import { register } from '../controllers/authController'
import { login } from '../controllers/authController'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)

export default router