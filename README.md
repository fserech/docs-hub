# Docs Hub

App tipo "sidebar de Discord" para navegar documentación de comandos por tecnología (Angular, y las que agregues después).

## Cómo correrlo

```bash
npm install
ng serve
```

Abre http://localhost:4200

## Cómo agregar una nueva tecnología

1. Crea `src/assets/data/docs/nombre-tecnologia.json` siguiendo la misma estructura que `angular.json` (secciones → comandos → título/descripción/código).
2. Agrégala a `src/assets/data/docs/index.json`:
   ```json
   [
     { "id": "angular" },
     { "id": "nombre-tecnologia" }
   ]
   ```
3. Recarga la app — aparecerá automáticamente en el sidebar.

## Stack

- Angular 20 (standalone components, signals, control flow @if/@for)
- Tailwind CSS v4
- Sin backend — todo el contenido vive en JSON estático en `src/assets/data/docs/`
