# Catálogo de Videojuegos - CRUD React

Este proyecto es una aplicación web desarrollada en React.js que permite gestionar un catálogo de videojuegos. Puedes agregar, editar, eliminar y visualizar tus juegos favoritos, con una interfaz moderna y responsive.

## Características
- CRUD completo (Crear, Leer, Actualizar, Eliminar) de videojuegos
- Consumo de API REST pública ([retoolapi.dev](https://retoolapi.dev/9mznW9/videojuegos))
- Validación de formularios con react-hook-form
- Mensajes de confirmación y error con SweetAlert2
- Componentes y estilos desacoplados (CSS modular)
- Pantalla de bienvenida animada
- Diseño responsive y amigable

## Estructura de la API
La API utilizada es pública y expone los siguientes campos para cada videojuego:
- `id`: Identificador único
- `juego`: Título del videojuego
- `genero`: Género
- `dificultad`: Dificultad
- `plataforma`: Plataforma
- `lanzamiento`: Año de lanzamiento

## Instalación y ejecución local

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/ssedux/PracticaAPI.git
   cd practica-crud-react
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia la aplicación**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   Ve a [http://localhost:5173](http://localhost:5173) para ver la app en funcionamiento.

## Dependencias principales
- React
- Vite
- react-hook-form
- react-router-dom
- sweetalert2

## Estructura de carpetas principal
```
practica-crud-react/
  src/
    components/   # Componentes reutilizables (Button, Card, Message, Title)
    hooks/        # Custom hooks para operaciones CRUD
    pages/        # Pantallas principales (WelcomePage, HomePage)
    styles/       # Archivos CSS para cada módulo
```

## Créditos
- Proyecto para prácticas académicas.
- API pública generada con [retoolapi.dev](https://retoolapi.dev/).

---
¡Disfruta gestionando tu colección de videojuegos!
