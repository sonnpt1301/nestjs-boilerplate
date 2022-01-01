import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { appConfig } from './configs/configs.constants';
import { HttpExceptionFilter } from './shared/filter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle(`EduSys official API - ${process.env.NODE_ENV_PREFIX}`)
    .setDescription(
      `The official API documentation for building EduSys App - ${process.env.NODE_ENV_PREFIX}`,
    )
    .setVersion('1.0')
    // .addServer(`process.env.BACKEND_URL`)
    .addBearerAuth({ type: 'apiKey', name: 'Authorization', in: 'header' })
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('apis', app, document);

  app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();

  await app.listen(appConfig.port || 3000);
}
bootstrap();
