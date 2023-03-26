export interface NetworkConfig {
  name: string;
  blockConfirmations?: number;
}

export const networkConfig: Record<number, NetworkConfig> = {
  31337: {
    name: 'hardhat',
    blockConfirmations: 1,
  },
  5: {
    name: 'goeril',
    blockConfirmations: 6,
  },
  137: {
    name: 'polygon',
    blockConfirmations: 12,
  },
};

export const developmentChains = ['hardhat', 'localhost'];
