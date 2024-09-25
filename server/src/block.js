import hre from "hardhat";

async function main() {
  try {
    const MyNFT = await hre.ethers.getContractFactory("MyNFT");
    const myNFT = await MyNFT.deploy();

    // Wait for the contract to be deployed
    await myNFT.waitForDeployment();

    // Log the deployed contract address
    console.log("MyNFT deployed to:", myNFT.target);
  } catch (error) {
    console.error("Error during deployment:", error);
    process.exit(1);
  }
}

// Invoke the main function
// main().then(() => process.exit(0));
export default main;
