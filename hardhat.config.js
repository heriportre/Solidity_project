require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",

  networks: {
    
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/D4u41o2a-iJPnx0y2K1ywqc_uly0eHln",
      accounts: ["6da90781e9beb97763aa2e4a62d02a4a2f5600677b67a7cf56120d18d69aaf48"]

    }
  },

  etherscan: {
    apiKey: "JAYWVJTH9ZQDGK2AUDJTARVCGQHU92Y1KM",
  },
};
