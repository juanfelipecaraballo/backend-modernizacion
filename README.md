# NestJS Auth JWT 🛡️

Este es un proyecto básico de autenticación con [NestJS](https://nestjs.com/) que permite a los usuarios:

- Registrarse (`POST /auth/register`)
- Iniciar sesión (`POST /auth/login`)
- Acceder a rutas protegidas mediante JWT (`GET /users/profile`)

---

## 🚀 Tecnologías utilizadas

- [NestJS](https://nestjs.com/)
- [Passport](https://www.passportjs.org/)
- [JWT](https://jwt.io/)
- `bcryptjs` para hashear contraseñas

---

## 🔧 Instalación

npm install

npm run start:dev


## Enpoints

### Registro
POST /auth/register
Headers:
Content-Type: application/json
Body:
{
  "username": "juan",
  "password": "1234"
}
Respuesta esperada:
{
  "id": 1721745410533,
  "username": "juan"
}

### Inicio de sesión
POST /auth/login
Headers:
Content-Type: application/json
Body:
{
  "username": "juan",
  "password": "1234"
}
Respuesta esperada:
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5..."
}

###  Ruta protegida - Perfil del usuario
GET /users/profile
Headers:
Authorization: Bearer <access_token>
Respuesta esperada:
{
  "userId": 1721745410533,
  "username": "juan"
}