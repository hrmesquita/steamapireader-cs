const EnvironmentConfig = require('./environments/environment-config');
const jsonData = require('C:/Users/hugom/Desktop/Dev/steam-api-key/config.json');

/**
 * Retrieves the local API key from the configuration file.
 * @returns {string} The local API key.
 */
const getLocalAPIKey = () => {
  return jsonData.apiKey;
};

/**
 * Picks the appropriate environment configuration based on the provided environment string.
 * @param {string} environment - The environment string.
 * @returns {object} - The environment configuration object.
 */
function environmentPicker(environment) {
  if (environment.slice(2).includes('--remote')) {
    let apiKey = environment.slice(3);
    EnvironmentConfig.remote.apiKey = apiKey;
    return EnvironmentConfig.remote;
  } else if (environment.slice(2).includes('--prod')) {
    return EnvironmentConfig.production;
  }
  EnvironmentConfig.development.apiKey = getLocalAPIKey();
  return EnvironmentConfig.development;
}

module.exports = {
  environmentPicker,
};
