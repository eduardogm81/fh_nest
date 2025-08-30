## Notas de la sección:

# Nest
Instalar el nest de forma global mediante npm (si no está instalado)
```bash
  npm i -g @nestjs/cli
```

Comprobar versión de nest
```bash
  nest -v
  nest --version
```

# Yarn 

Para instalar yarn con npm:

```bash
  npm install -g yarn
```

Para instalar los node-modules del proyecto:

```bash
  yarn install
```

Lanzar servidor con watch:
```bash
  yarn start:dev
```

# Dependencias específicas del proyecto

Eliminar la dependencia prettier (para que no marque errores por saltos de línea y espacios)
```bash
  yarn remove prettier
```

Añadir uuid para tener herramientas para generar ids de tipo uuid
```bash
  yarn add uuid
```

Para que el IDE registre los tipos de uuid a la hora de importarlos:
```bash
  # Instalarlo de forma global con npm
  npm i --save-dev @types/uuid
  
  # Instalarlo sólo en nuestro proyecto con yarn
  yarn add -D @types/uuid
```


