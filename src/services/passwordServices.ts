// Este archivo contiene funciones relacionadas con el manejo seguro de contraseñas.
// Utiliza el paquete bcrypt para encriptar y comparar contraseñas de manera segura.
// Las funciones principales son:
// - `hashPassword`: Esta función toma una contraseña y la encripta utilizando bcrypt con un número de rondas de sal (SALT_ROUNDS) especificado.
// - `comparePassword`: Esta función compara una contraseña proporcionada con un hash de contraseña almacenado para verificar si coinciden.

// Importa el módulo bcrypt para la encriptación de contraseñas
import bcrypt from 'bcrypt'

const SALT_ROUNDS: number = 10

export const hashPassword = async(password: string ): Promise<string> => {
   return await bcrypt.hash(password, SALT_ROUNDS)
}

export const comparePassword = async(password:string, hash:string): Promise<boolean> => {
   return await bcrypt.compare(password, hash)
}

