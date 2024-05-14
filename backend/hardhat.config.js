require("@nomicfoundation/hardhat-toolbox");
//require("@nomicfoundation/hardhat-verify");
require("dotenv").config({path:".env"});
const KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    lisk :{
      url: `https://rpc.sepolia-api.lisk.com`,  
      chainId: 4202,
      accounts: [KEY],
      
    },
    
  },
  etherscan: {
    // Use "123" as a placeholder, because Blockscout doesn't need a real API key, and Hardhat will complain if this property isn't set.
     apiKey: {
      "lisk-sepolia": "123"
     },
     customChains: [
      {
          network: "lisk-sepolia",
          chainId: 4202,
          urls: {
              apiURL: "https://sepolia-blockscout.lisk.com/api",
              browserURL: "https://sepolia-blockscout.lisk.com"
          }
       }
     ]
   },
   sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true
  }
};