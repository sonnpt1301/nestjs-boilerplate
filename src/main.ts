import './env';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { appConfig } from './configs/configs.constants';
import { HttpExceptionFilter } from './shared/filter/http-exception.filter';
import { SwaggerInitialize } from './shared/swaggers/document';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerInitialize(app);

  app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.enableCors();

  const { port = 9090 } = appConfig;
  await app.listen(port, () =>
    console.log(`Server is running on http://localhost:${port}`),
  );
}
bootstrap();
