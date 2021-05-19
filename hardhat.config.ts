import '@nomiclabs/hardhat-truffle5';
import 'hardhat-typechain';

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    mainnet: {
      url: 'https://forno.celo.org',
      chainId: 1,
      live: true,
      gasPrice: 0.5 * 10 ** 9,
      gas: 8000000,
    },
    alfajores: {
      url: 'https://alfajores-forno.celo-testnet.org',
      chainId: 44787,
      live: true,
      gasPrice: 0.5 * 10 ** 9,
      gas: 8000000,
    },
    hardhat: {
      chainId: 31337,
      gas: 12000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
      timeout: 1800000,
    //   accounts: [
    //     {
    //       privateKey: process.env.PRIVATE_KEY_1 as string,
    //       balance: '10000000000000000000000',
    //     },
    //     {
    //       privateKey: process.env.PRIVATE_KEY_2 as string,
    //       balance: '10000000000000000000000',
    //     },
    //     {
    //       privateKey: process.env.PRIVATE_KEY_3 as string,
    //       balance: '10000000000000000000000',
    //     },
    //     {
    //       privateKey: process.env.PRIVATE_KEY_4 as string,
    //       balance: '10000000000000000000000',
    //     },
    //   ],
    },
  },
  solidity: {
    compilers: [
        {
            version: "0.5.0",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 100
                }
            }
        },
        {
            version: "0.5.16",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 100
                }
            }
        },
        {
            version: "0.6.12",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 100
                }
            }
        },
    ]
  },
  paths: {
    sources: './contracts/5',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  typechain: {
    outDir: './typechain',
    target: 'truffle-v5',
  },
};
