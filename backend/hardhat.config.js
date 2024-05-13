require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path:".env"});
const KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    hedera :{
      url: `https://rpc.sepolia-api.lisk.com`,
      chainId: 4202,
      accounts: [KEY],
      
    },
    
  },
};