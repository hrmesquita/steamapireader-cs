module.exports = class EnvironmentConfig {
  static development = {
    apiKey: 'PLACE_HOLDER',
    fullURL: 'http://localhost:4200',
    URL: 'http://localhost',
    PORT: 4200,
  };

  static production = {
    apiKey: 'PLACE_HOLDER',
    fullURL: 'https://www.localhost.com',
    URL: 'https://www.localhost.com',
    PORT: 80,
  };

  static remote = {
    apiKey: 'PLACE_HOLDER',
    fullURL: 'https://www.localhost.com',
    URL: 'https://www.localhost.com',
    PORT: 80,
  };
};
