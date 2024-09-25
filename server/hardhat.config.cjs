require("@nomicfoundation/hardhat-toolbox");

// require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.20", // Add this line
      },
      {
        version: "0.8.0", // Keep your existing version if necessary
      },
    ],
  },
};
