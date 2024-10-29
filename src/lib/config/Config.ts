class Config {
    public X_API_KEY: string = '';

    private static instance: Config;

    private constructor() {}

    static getInstance(): Config {
        if (!Config.instance) {
            Config.instance = new Config();
        }

        return Config.instance;
    }

    setXApiKey(xApiKey: string) {
        this.X_API_KEY = xApiKey;
    }

    getXApiKey(): string {
        if (!this.X_API_KEY) {
            throw new Error('X_API_KEY is not set');
        }
        return this.X_API_KEY;
    }
}

export default Config;
