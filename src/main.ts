import './env';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import { appConfig, rabbitMQConfig } from './configs/configs.constants';
import { HttpExceptionFilter } from './shared/filter/http-exception.filter';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const { host, password, queueName, user } = rabbitMQConfig;
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle(`EduSys official API`)
    .setDescription(`The official API documentation for building EduSys App`)
    .setVersion('1.0')
    // .addServer(`process.env.BACKEND_URL`)
    .addBearerAuth({ type: 'apiKey', name: 'Authorization', in: 'header' })
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('apis', app, document);

  app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${user}:${password}@${host}/`],
      queue: queueName,
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.startAllMicroservices();
}
bootstrap();
