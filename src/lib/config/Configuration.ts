type ConfigOptions = {
    xApiKey: string;
    accessToken: string;
    refreshToken: string;
  };
  
  class Configuration {
    private static xApiKey: string | null = null;
    private static accessToken: string | null = null;
    private static refreshToken: string | null = null;
  
    public static initialize(options: ConfigOptions): void {
      if (!this.xApiKey && !this.accessToken) {
        this.xApiKey = options.xApiKey;
        this.accessToken = options.accessToken;
        this.refreshToken = options.refreshToken;
        console.log('Configuration initialized');
      } else {
        console.warn('Configuration has already been initialized.');
      }
    }
  
    public static getXApiKey(): string {
      if (!this.xApiKey) {
        throw new Error('X_API_KEY is not initialized. Please call initialize() first.');
      }
      return this.xApiKey;
    }
  
    public static getAccessToken(): string {
      if (!this.accessToken) {
        throw new Error('accessToken is not initialized. Please call initialize() first.');
      }
      return this.accessToken;
    }

    public static getRefreshToken(): string {
        if (!this.refreshToken) {
          throw new Error('refreshToken is not initialized. Please call initialize() first.');
        }
        return this.refreshToken;
    }
  }

export {
    Configuration
}