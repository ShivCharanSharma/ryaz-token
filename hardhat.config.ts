import '@nomicfoundation/hardhat-toolbox';
import 'dotenv/config';
import 'hardhat-gas-reporter';
import '@nomiclabs/hardhat-etherscan';
import 'solidity-coverage';
import 'hardhat-deploy';

import { HardhatUserConfig } from 'hardhat/config';

const GOERIL_RPC_URL = process.env.GOERIL_RPC_URL || 'http://goeril.rpc.url';
const PRIVATE_KEY = process.env.PRIVATE_KEY || '0xkey';
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || 'key';
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || 'key';

const config: HardhatUserConfig = {
  solidity: '0.8.18',
  defaultNetwork: 'hardhat',
  networks: {
    goeril: {
      url: GOERIL_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
    localhost: {
      url: 'http://127.0.0.1:8545',
      // accounts: handled by hardhat
      chainId: 31337,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: false,
    outputFile: 'gas-report.txt',
    noColors: true,
    currency: 'USD',
    coinmarketcap: COINMARKETCAP_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    user: {
      default: 0,
    },
  },
};
export default config;
