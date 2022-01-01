declare namespace NodeJS {
  export interface ProcessEnv {
    API_PREFIX: string;
    NODE_ENV: string;
    APP_PORT: string;

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
  }
}
