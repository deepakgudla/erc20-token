require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
//dotenv
require("dotenv").config();

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`${process.env.METAMASK_ACCOUNT}`]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};




