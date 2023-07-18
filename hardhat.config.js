/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');

const { alchemyApiKey, mnemonic } = require('./secrets.json');

module.exports = {
  localhost: {
    url: 'http://127.0.0.1:8545',
  },
  hardhat: {
    // See its defaults
  },
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${alchemyApiKey}`,
      accounts: { mnemonic: mnemonic },
    },
  },
  solidity: '0.8.18',
};
