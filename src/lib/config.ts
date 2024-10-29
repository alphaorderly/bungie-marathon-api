import Config from './config/Config';

const config = Config.getInstance();

/**
 * Set the X_API_KEY for the requests
 * @param apiKey
 */
const setXApiKey = (apiKey: string) => {
    config.setXApiKey(apiKey);
};

const getXApiKey = () => {
    return config.getXApiKey();
};

export { setXApiKey, getXApiKey };
