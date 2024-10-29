import ky from 'ky';
import { getXApiKey } from '../../lib/config';

const kyInstance = ky.create({
    prefixUrl: 'https://www.bungie.net/Platform',
    headers: {
        'X-API-Key': getXApiKey(),
    },
});

export default kyInstance;
