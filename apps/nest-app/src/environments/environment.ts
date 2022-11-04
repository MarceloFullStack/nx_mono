export const environment = {
  production: false,
  TYPEORM_CONNECTION:'postgres',
  TYPEORM_HOST:'localhost',
  TYPEORM_PORT:5431,
  TYPEORM_USERNAME:'postgres',
  TYPEORM_PASSWORD:'postgres',
  TYPEORM_DATABASE:'postgres',
  TYPEORM_SYNCHRONIZE:true,
  TYPEORM_LOGGING:true,
  TYPEORM_ENTITIES:'src/entity/**/*.ts',

};
