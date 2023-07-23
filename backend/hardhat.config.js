require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    hmvtest: {
      url: 'https://rpc.testnet.oasys.homeverse.games/',
      chainId: 40875,
      gasPrice: 0,
      accounts: [
        // Provide your private key here
        // Remove comment out to use value from secrets.json
        //PRIVATE_KEY
      ],
    },
  },
};
