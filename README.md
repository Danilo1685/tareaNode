# 📦 API REST con Express

¡Bienvenido/a a este proyecto de API REST construida con [Express.js](https://expressjs.com/)! 🚀

> Esta API REST permite gestionar productos y usuarios mediante peticiones HTTP.

---

## 🗂️ Estructura del Proyecto

```
api-rest/
├── controllers/
│   ├── products.controller.js
│   └── users.controller.js
├── db/
├── node_modules/
├── routes/
│   ├── index.js
│   ├── products.routes.js
│   └── users.routes.js
├── index.js
├── package.json
└── README.md
```

---

## 🚀 Comenzando

### ✅ Requisitos

- Node.js ≥ 14.x
- npm ≥ 6.x

### 🔧 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/Danilo1685/tareaNode.git
cd tareaNode
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor en modo desarrollo:

```bash
npm run dev
```

El servidor se levantará con `nodemon` y recargará automáticamente ante cambios.

---

## 🌐 Endpoints Disponibles

### 🛍️ Productos

| Método | Ruta             | Descripción                        |
|--------|------------------|------------------------------------|
| GET    | `/products`      | Obtener todos los productos        |
| GET    | `/products/:id`  | Obtener un producto por su ID      |
| POST   | `/products`      | Crear un nuevo producto            |
| PUT    | `/products/:id`  | Actualizar un producto existente   |
| DELETE | `/products/:id`  | Eliminar un producto               |

### 👤 Usuarios

| Método | Ruta           | Descripción                      |
|--------|----------------|----------------------------------|
| GET    | `/users`       | Obtener todos los usuarios       |
| GET    | `/users/:id`   | Obtener un usuario por su ID     |
| POST   | `/users`       | Crear un nuevo usuario           |
| PUT    | `/users/:id`   | Actualizar un usuario existente  |
| DELETE | `/users/:id`   | Eliminar un usuario              |

---

## 🛠️ Tecnologías Utilizadas

- [Express](https://expressjs.com/)
- [Nodemon](https://nodemon.io/)
- [CORS](https://www.npmjs.com/package/cors)
- `fs` y `path` (módulos nativos de Node.js)

---

## 📄 Licencia

Este proyecto está licenciado bajo la **ISC License**.

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar el proyecto, puedes:

- Hacer un fork
- Crear una rama (`git checkout -b feature/nueva-funcionalidad`)
- Hacer tus cambios
- Enviar un pull request

---

## 👨‍💻 Autor

**Danilo1685**

🔗 [github.com/Danilo1685](https://github.com/Danilo1685)

---

## ⭐ ¿Te gustó el proyecto?

¡Dale una estrella al repo! ⭐