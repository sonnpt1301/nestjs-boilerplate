import { registerAs } from '@nestjs/config';

export default registerAs('rabbitmq', () => ({
  url: `amqp://${process.env.RABBITMQ_USERNAME}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`,
}));
