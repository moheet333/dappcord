const hre = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
<<<<<<< Updated upstream
  // Setup accounts & variables
  const [deployer] = await ethers.getSigners()
  const NAME = "Dappcord"
  const SYMBOL = "DC"

  // Deploy contract
  const Dappcord = await ethers.getContractFactory("Dappcord")
  const dappcord = await Dappcord.deploy(NAME, SYMBOL)
  await dappcord.deployed()

  console.log(`Deployed Dappcord Contract at: ${dappcord.address}\n`)

  // Create 3 Channels
  const CHANNEL_NAMES = ["general", "intro", "jobs"]
  const COSTS = [tokens(1), tokens(0), tokens(0.25)]

  for (var i = 0; i < 3; i++) {
    const transaction = await dappcord.connect(deployer).createChannel(CHANNEL_NAMES[i], COSTS[i])
    await transaction.wait()

    console.log(`Created text channel #${CHANNEL_NAMES[i]}`)
=======
  const Dappcord = await hre.ethers.getContractFactory("Dappcord");
  const dappcord = await Dappcord.deploy("Dappcord", "DC");
  await dappcord.deployed();
  const [deployer, random] = await hre.ethers.getSigners();

  console.log("Deployed contract at : ", dappcord.address);

  const channel_names = ["general", "intro", "jobs"];
  const costs = [tokens(1), tokens(0), tokens(0.25)];
  // create 3 channels
  for (var i = 0; i < 3; i++) {
    let txn = await dappcord
      .connect(deployer)
      .createChannel(channel_names[i], costs[i]);
    await txn.wait();
    console.log(`Channel created #${channel_names[i]}`);
>>>>>>> Stashed changes
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});