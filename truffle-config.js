require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')
const utils = require('web3-utils')

const ContractKit = require('@celo/contractkit')
const Web3 = require('web3')

// Connect to alfajores network
const web3 = new Web3(process.env.RPC_URL)
const kit = ContractKit.newKitFromWeb3(web3)
kit.addAccount(process.env.PRIVATE_KEY)


/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

// const HDWalletProvider = require('@truffle/hdwallet-provider');
// const infuraKey = "fj4jll3k.....";
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.

    // CELO networks
    alfajores: {
      provider: kit.web3.currentProvider,
      network_id: 44787,
      gas: 6000000,
      gasPrice: utils.toWei('0.1', 'gwei'),
    },
    mainnet: {
      provider: kit.web3.currentProvider,
      network_id: 42220,
      gas: 6000000,
      gasPrice: utils.toWei('0.1', 'gwei'),
    },

    // local ganache 
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "1337",
    },

    // kovan testnet
    
    kovan: {
      provider: function () {
        return new HDWalletProvider(
          process.env.PRIVATE_KEY,
          'https://kovan.infura.io/v3/'+process.env.INFURA_KEY
        );
      },
      network_id: '42',
      skipDryRun: true,
    },
  },

  // Configure your compilers
    compilers: {
        // external: {
        //     command: "./compile-contracts",
        //     targets: [{
        //         path: "./artifacts/*.json"
        //     }]
        // },
        solc: {
            version: '0.5.16', // Fetch exact version from solc-bin (default: truffle's version)
            // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
            settings: {
              gasPrice: 0,
              // See the solidity docs for advice about optimization and evmVersion
              optimizer: {
                enabled: true,
                runs: 999999,
              },
            },
          },
    },
    

  // Verify contract on Etherscan
  plugins: [
    'truffle-plugin-verify'
  ],

  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  },
};
