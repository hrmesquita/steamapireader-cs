module.exports = class EnvironmentConfig {
  static development = {
    apiKey: 'PLACE_HOLDER',
    fullURL: 'http://localhost:4200',
    url: 'http://localhost',
    port: 4200,
  };

  static production = {
    apiKey: 'PLACE_HOLDER',
    fullURL: 'https://www.localhost.com',
    url: 'https://www.localhost.com',
    port: 80,
  };

  static remote = {
    apiKey: 'PLACE_HOLDER',
    fullURL: 'https://www.localhost.com',
    url: 'https://www.localhost.com',
    port: 80,
  };
};
