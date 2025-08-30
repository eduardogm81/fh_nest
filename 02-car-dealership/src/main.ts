import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true, // Sólo deja pasar las propiedades que estén definidas en el objeto
        forbidNonWhitelisted: true, // Si envía más propiedades que no están definidas da un error
      })
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
