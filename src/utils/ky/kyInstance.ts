import ky from 'ky';
import { getConfig } from 'lib/config/config';

const kyInstance = ky.create({
    prefixUrl: 'https://www.bungie.net/Platform',
    headers: {
        'X-API-Key': getConfig().apiKey,
        'Authorization': `Bearer ${getConfig().token}`,
    },
    hooks: {
        beforeRetry: []
    },
    retry: 2,
});

export default kyInstance;
