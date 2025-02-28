# Proyecto de Backend - Node.js con Prisma y PostgreSQL

Este proyecto es una API RESTful desarrollada en **Node.js** que implementa la funcionalidad de autenticación de usuarios utilizando **JWT (Json Web Tokens)**, manejo de contraseñas con **bcrypt**, y persistencia de datos en una base de datos **PostgreSQL** utilizando **Prisma ORM**.

## Características

- **Autenticación de Usuarios**: Implementa un sistema de registro e inicio de sesión utilizando JWT para asegurar las rutas protegidas.
- **Operaciones CRUD**: Permite la creación, obtención, actualización y eliminación de usuarios.
- **Protección de Rutas**: Uso de middleware para verificar el token JWT en las rutas protegidas.
- **Seguridad**: Almacenamiento seguro de contraseñas mediante el uso de `bcrypt` para el hash y la comparación de contraseñas.
- **Base de Datos PostgreSQL**: Utiliza **Prisma ORM** para interactuar con una base de datos PostgreSQL.
  
## Tecnologías

- **Node.js**: Plataforma para la ejecución del código JavaScript en el servidor.
- **Express**: Framework web para Node.js.
- **JWT (Json Web Tokens)**: Para la autenticación de usuarios.
- **bcrypt**: Para el hash de contraseñas y la comparación segura.
- **Prisma ORM**: Para interactuar con la base de datos.
- **PostgreSQL**: Base de datos relacional utilizada para almacenar los usuarios y sus credenciales.


## Instalación

1. **Clonar el repositorio**:
   
   ```bash
   git clone <url-del-repositorio>
   cd <nombre-del-repositorio>

2. **Instalar las dependencias**
    
    npm install

3. **Configurar la base de datos**
    
    DATABASE_URL=postgresql://user:password@localhost:5432/database_name
    JWT_SECRET=your-secret-key

4. **Configurar Prisma**
    
    npx prisma migrate dev --name init
    npx prisma generate

## Uso

1. **Iniciar el proyecto**
    
    npm run dev
    El servidor debería estar corriendo en http://localhost:3000.

2. **Posibles EndPoints**
    
    POST /auth/register: Crea un nuevo usuario con email y password.
    
    POST /auth/login: Inicia sesión con email y password, y devuelve un token JWT.
    
    GET /users: Obtiene todos los usuarios (requiere autenticación).
    
    GET /users/:id: Obtiene un usuario por ID (requiere autenticación).
    
    PUT /users/:id: Actualiza un usuario por ID (requiere autenticación).
    
    DELETE /users/:id: Elimina un usuario por ID (requiere autenticación).

## Explicación del Código

1.  authController.ts: Controla el registro e inicio de sesión de los usuarios. Utiliza el servicio generateToken 
para generar un JWT y hashPassword para asegurar las contraseñas.

2.  userController.ts: Gestiona las operaciones CRUD de los usuarios (crear, obtener, actualizar,eliminar).       Utiliza Prisma para interactuar con la base de datos.

3. Prisma ORM: Se utiliza para manejar la conexión y las operaciones sobre la base de datos PostgreSQL. Prisma  permite trabajar con la base de datos de manera eficiente y segura.

4. JWT y Middleware: El token JWT se utiliza para autenticar a los usuarios en las rutas protegidas. El middleware authenticateToken valida el token antes de acceder a las rutas restringidas.

## Contacto
Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto conmigo.

[Enzo Melgarejo]
[enzomelgarejo@gmail.com]
