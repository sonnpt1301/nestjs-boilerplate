import './env';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import { appConfig } from './configs/configs.constants';
import { HttpExceptionFilter } from './shared/filter/http-exception.filter';
import { SwaggerInitialize } from './shared/swaggers/document';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerInitialize(app);

  app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();

  const { port } = appConfig;
  await app.listen(port || 3000, () => {
    console.log(`Server is running on ${port}`);
  });
}
bootstrap();
