## Crear proyecto

```bash
  nest new pokedex
```

Iniciar la aplicación:

```bash
  yarn start:dev
```

Generar recursos con nest

```bash
  nest g res pokemon --no-spec
```

levantar el servicio de docker de forma desatendida

```bash
  docker-compose up -d 
```

Datos de conexión base de datos mongo:
URL: mongodb://localhost:27017/nest-pokemon

Instalar la librería de mongoose:
```bash
  # npm i @nestjs/mongoose mongoose
  yarn add @nestjs/mongoose mongoose
```

Validaciones
```bash
    yarn add class-validator class-transformer
```