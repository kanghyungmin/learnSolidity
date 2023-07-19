// scripts/deploy.js
const { ethers } = require('hardhat');
async function main() {
  // We get the contract to deploy
  const Box = await ethers.getContractFactory('lec14');
  console.log('Deploying Box...');
  const box = await Box.deploy('Alice', 52);
  await box.waitForDeployment();
  console.log('Box deployed to:', await box.getAddress());

  let a = await box.name();
  console.log(a);
  //   let b = await box.a();
  //   console.log('a after changeA: ', b.toString());
  //   console.log('a: ', await box.a());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
