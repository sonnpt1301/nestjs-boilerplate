import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const SwaggerInitialize = (app: INestApplication): void => {
  const options = new DocumentBuilder()
    .setTitle(`NestJS Boilerplate`)
    .setDescription(
      `The official API documentation for building NestJS Boilerplate`,
    )
    .setVersion('1.0')
    // .addServer(`process.env.BACKEND_URL`)
    .addBearerAuth({ type: 'apiKey', name: 'Authorization', in: 'header' })
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
};
