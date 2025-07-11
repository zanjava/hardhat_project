require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    hardhat: {},
    sepolia: {
      // url: "https://sepolia.infura.io/v3/" + process.env.INFURA_ID,
      url: "https://eth-sepolia.g.alchemy.com/v2/" + process.env.ALCHEMY_ID,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
