// scripts/deploy.js
const { ethers } = require('hardhat');
async function main() {
  // We get the contract to deploy
  const ExEvent = await ethers.getContractFactory('example_event');
  console.log('Deploying Box...');
  const exEvent = await ExEvent.deploy();
  await exEvent.waitForDeployment();
  console.log('Box deployed to:', await exEvent.getAddress());

  await exEvent.PushEvent('111');
  await exEvent.PushEvent('222');
  await exEvent.PushEvent('333');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
