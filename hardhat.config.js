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

//Compile smart contract
//npx hardhat compile

//hardhat node to local
//npx hardhat node

//contract deploy
//npx hardhat run --network localhost scripts/deploy.js

//hardhat contract console.
//npx hardhat console --network localhost

//run scripts
//npx hardhat run --network localhost ./scripts/index.js
