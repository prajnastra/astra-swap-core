const hre = require('hardhat')

async function main() {
  const [account] = await hre.ethers.getSigners()
  console.log(`Deployer account: ${account.address}`)

  const Factory = await hre.ethers.getContractFactory('UniswapV2Factory')
  const factory = await Factory.deploy(account.address)

  await factory.deployed()

  console.log('Factory deployed to :', factory.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
