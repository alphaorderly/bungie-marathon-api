export interface ClientConfig {
  token?: string;
  refreshToken?: string;
  apiKey?: string;
}

let globalConfig: ClientConfig | null = null;

export const initializeConfig = (config: ClientConfig) => {
  globalConfig = { ...config };
};

export const getConfig = (): ClientConfig => {
  if (!globalConfig) {
    throw new Error('Configuration not initialized. Call initializeConfig first.');
  }
  return { ...globalConfig };
};