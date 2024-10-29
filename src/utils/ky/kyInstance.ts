import ky from 'ky';
import { Configuration } from 'lib/config/Configuration';

const kyInstance = ky.create({
    prefixUrl: 'https://www.bungie.net/Platform',
    headers: {
        'X-API-Key': Configuration.getXApiKey(),
        'Authorization': `Bearer ${Configuration.getAccessToken()}`
    },
    hooks: {
        beforeRetry: []
    },
    retry: 2,
});

export default kyInstance;
