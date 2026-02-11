# 🏋️‍♂️ Gym Landing Page - Static Template (JSON Driven)

Este es el repositorio **Template Oficial Estático** para crear Landing Pages de Gimnasios de alta conversión de forma automática desde **JokemOS**.

A diferencia del template con Sanity, este **no requiere base de datos**. Toda la configuración vive en `data/config.json`.

## 📂 Estructura de Archivos

```
/
├── data/
│   └── config.json       # <--- AQUÍ VIVE LA INFORMACIÓN DEL GIMNASIO
├── public/
│   ├── images/
│   │   ├── hero/         # Portada
│   │   ├── gallery/      # Fotos del gimnasio
│   │   ├── trainers/     # Fotos de entrenadores
│   │   └── testimonials/ # Fotos de clientes
│   └── logo/             # Logo del gimnasio
└── ...
```

## 🚀 Guía de Uso

### 1. Configuración de Texto (Automática)
Al desplegar desde JokemOS, el archivo `data/config.json` es inyectado automáticamente con:
*   Nombre del Gimnasio
*   Colores de Marca
*   Teléfono, Dirección, Redes Sociales
*   Servicios y Precios

Si necesitas hacer cambios manuales, simplemente edita `data/config.json` y haz push.

### 2. Configuración de Imágenes
Arrastra las imágenes a las carpetas correspondientes en `public/images/`.
El sistema buscará imágenes por defecto o las que definas en el JSON.

### 3. Personalización de Estilos
El sistema usa **Tailwind CSS**. 
Los colores principales se definen como variables CSS que son sobrescritas por el `config.json` en tiempo de ejecución (o build time).

## 🛠 Tech Stack

*   **Framework**: Next.js (App Router)
*   **Styling**: Tailwind CSS
*   **Data**: JSON (Static)
*   **Deployment**: Vercel (Recomendado) o cualquier Static Hosting.

## 📦 Comandos Disponibles

*   `npm run dev`: Servidor de desarrollo.
*   `npm run build`: Construye el sitio para producción.
*   `npm start`: Inicia el servidor de producción.
