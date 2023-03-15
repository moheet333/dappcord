const hre = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

async function main() {
  const Dappcord = await hre.ethers.getContractFactory("Dappcord");
  const dappcord = await Dappcord.deploy("Dappcord", "DC");
  await dappcord.deployed();
  const [deployer, random] = await hre.ethers.getSigners();

  console.log("Deployed contract at : ", dappcord.address);

  const channel_names = ["general", "intro", "jobs"];
  const costs = [tokens(1), tokens(0), tokens(0.25)];
  // create 3 channels
  for (let i = 0; i < 3; i++) {
    let txn = await dappcord
      .connect(deployer)
      .createChannel(channel_names[i], costs[i]);
    await txn.wait();
    console.log(`Channel created #${channel_names[i]}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
