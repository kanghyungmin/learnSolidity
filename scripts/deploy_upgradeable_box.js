const { ethers, upgrades } = require('hardhat');

async function main() {
  const Box = await ethers.getContractFactory('Box');
  console.log('Deploying Box...');
  const box = await upgrades.depolyProxy(Box, [42], { initializer: 'store' });
  await box.deployed();
  console.log('Box depolyed to:', box.address);
}

main();
