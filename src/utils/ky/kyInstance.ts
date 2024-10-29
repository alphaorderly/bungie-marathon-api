import ky from 'ky';

const kyInstance = ky.create({
    prefixUrl: 'https://www.bungie.net/Platform',
    hooks: {
        beforeRetry: []
    },
    retry: 2,
});

export default kyInstance;
