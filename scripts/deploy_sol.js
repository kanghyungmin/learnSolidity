// scripts/deploy.js
const { ethers } = require('hardhat');
async function main() {
  // We get the contract to deploy
  const Box = await ethers.getContractFactory('Public_example_2');
  console.log('Deploying Box...');
  const box = await Box.deploy();
  await box.waitForDeployment();
  console.log('Box deployed to:', await box.getAddress());
  //   let a = await box.a();
  //   console.log('a: ', a.toString());

  await box.changeA_2(6);
  let a = await box.use_public_example_a();
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
