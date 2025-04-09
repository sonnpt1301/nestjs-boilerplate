declare namespace NodeJS {
  export interface ProcessEnv {
    /** APP */
    API_PREFIX: string;
    NODE_ENV: string;
    APP_PORT: string;

    /** JWT */
    JWT_SECRET: string;
    JWT_EXPIRATION_TIME: string;
    JWT_REFRESH_TOKEN_SECRET: string;
    JWT_REFRESH_TOKEN_EXPIRATION_TIME: string;

    /** TYPEORM CONFIG */
    DB_DATABASE: string;
    DB_HOST: string;
    DB_PORT: string;
    DB_USER: string;
    DB_PASS: string;

    /** AWS S3 */
    AWS_END_POINT: string;
    AWS_ACCESS_KEY: string;
    AWS_SECRET_ACCESS_KEY: string;
    BUCKET: string;
    REGION: string;

    /** MONGO */
    MONGODB_USERNAME: string;
    MONGODB_PASSWORD: string;
    MONGODB_HOST: string;
    MONGODB_PORT: string;
    MONGODB_DATABASE: string;

    /** REDIS */
    REDIS_HOST: string;
    REDIS_PORT: string;
    REDIS_PASSWORD: string;

    /** RABBITMQ */
    RABBITMQ_USERNAME: string;
    RABBITMQ_PASSWORD: string;
    RABBITMQ_AMQP_PORT: string;
    RABBITMQ_MANAGEMENT_PORT: string;

    /** GOOGLE */
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    GOOGLE_REDIRECT_URI: string;

    /** FACEBOOK */
    FACEBOOK_CLIENT_ID: string;
    FACEBOOK_CLIENT_SECRET: string;
    FACEBOOK_REDIRECT_URI: string;
  }
}
