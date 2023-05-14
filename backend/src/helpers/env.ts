type EmailEnvKey =
  | 'EMAIL_HOST'
  | 'EMAIL_USERNAME'
  | 'EMAIL_PASSWORD'
  | 'FROM_EMAIL'
  | 'EMAIL_PORT';

type ProcessEnvKey = 'PORT' | 'SOCKETS_PORT';

type S3StorageEnvKey =
  | 'S3_API_KEY'
  | 'S3_API_SECRET'
  | 'S3_API_LINK'
  | 'S3_BUCKET_NAME';

type JWTEnvKey =
  | 'JWT_SECRET_KEY'
  | 'JWT_ACCESS_TOKEN_EXPIRATION_TIME'
  | 'REFRESH_TOKEN_EXPIRATION_TIME';

type GoogleEnvKey = 'GOOGLE_CLIENT_ID' | 'GOOGLE_CLIENT_SECRET';

type FacebookEnvKey = 'FACEBOOK_APP_ID' | 'FACEBOOK_SECRET_KEY';

type AppEnvKeys = 'FRONTEND_URL' | 'BACKEND_URL';

type EnvKeys =
  | ProcessEnvKey
  | EmailEnvKey
  | S3StorageEnvKey
  | AppEnvKeys
  | JWTEnvKey
  | GoogleEnvKey
  | FacebookEnvKey;

export const getEnv = (key: EnvKeys): string => process.env[key] as string;