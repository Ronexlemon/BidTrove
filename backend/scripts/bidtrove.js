const {ethers} = require("hardhat");


async function main(){
    //get the contract
    const BidTroveContract = await ethers.getContractFactory("Bider");
    //deploy the contract
    const BidTroveContractContractDeploy = await BidTroveContract.deploy({ gasLimit: 8000000 });
    //await deployment
    await BidTroveContractContractDeploy.deployed();
    //console the address
    console.log("BidTroveAddress", BidTroveContractContractDeploy.address);
}
//call main
main().then(()=>
process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
})