import ky from 'ky';

const kyInstance = ky.create({
    prefixUrl: 'https://www.bungie.net/Platform',
});

export default kyInstance;
