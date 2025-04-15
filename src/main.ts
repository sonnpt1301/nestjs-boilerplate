import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { HttpExceptionFilter } from './shared/filter/http-exception.filter';
import { SwaggerInitialize } from './shared/swaggers/document';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set global prefix for all routes
  const apiPrefix = process.env.API_PREFIX || 'api';
  app.setGlobalPrefix(apiPrefix);

  SwaggerInitialize(app);

  app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.enableCors();

  const port = process.env.APP_PORT;
  await app.listen(port, () =>
    console.log(`Server is running on http://localhost:${port}/${apiPrefix}`),
  );
}
bootstrap();
