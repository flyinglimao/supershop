# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```



deploy contract
```shell
npx hardhat ignition deploy ./ignition/modules/<contractName>.ts --network <network>
```

run scripts
```shell
npx hardhat run ./scripts/<scriptName>.ts --network <network>
```



1. deploy store event contract and get the address
2. use the store event address to deploy store contract
3. register store contract address in store event contract

deploy to multiple networks
https://www.npmjs.com/package/xdeployer

install
```
yarn add --dev xdeployer @nomicfoundation/hardhat-ethers ethers
```

deploy
```
npx hardhat xdeploy
```

networks: sepolia
StoreEvent: 0x98A52058268fe0eB9ED985b8856272c1Ff12b012
Store: 0x4E89e2Fb950fB0d0EA485C1Eec5433557765FED6
test ERC20 address: 0x2c73213484CDF26C6b499b5890E0523aA5ba57e6
///////////////

networks: op sepolia
StoreEvent: 0x0Ef09E113f8a412BaEfa4B2d9a597EeAE1EA84d3
Store: 0x55D30Ba332AdA10478e5aBbcA3400253bD5281E4
test USDC: 0x2c73213484CDF26C6b499b5890E0523aA5ba57e6

networks: celo-alfajores
StoreEvent: 0x55D30Ba332AdA10478e5aBbcA3400253bD5281E4
Store: 0x15A580c90B10bF98dFe66f28B8e96D08150Cb6a4
test USDC: 0x2F25deB3848C207fc8E0c34035B3Ba7fC157602B

event verified:
https://celo-alfajores.blockscout.com/address/0x55D30Ba332AdA10478e5aBbcA3400253bD5281E4#code

store verified:
https://celo-alfajores.blockscout.com/address/0x15A580c90B10bF98dFe66f28B8e96D08150Cb6a4#code