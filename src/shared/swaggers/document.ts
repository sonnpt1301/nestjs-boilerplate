import { INestApplication } from '@nestjs/common';

export const SwaggerInitialize = (app: INestApplication): void => {
    const options = new DocumentBuilder()
        .setTitle(`EduSys official API`)
        .setDescription(`The official API documentation for building EduSys App`)
        .setVersion('1.0')
        // .addServer(`process.env.BACKEND_URL`)
        .addBearerAuth({ type: 'apiKey', name: 'Authorization', in: 'header' })
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('apis', app, document);
};
