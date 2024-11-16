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

networks: base sepolia
StoreEvent: 0x1Fe7556e700ED09C0dDb5d9482b7D0c5E477a10c
Store: 0x63706656297A7A94fE052819477BADa37c719F39
test USDC: 0x036CbD53842c5426634e7929541eC2318f3dCF7e

event verified:
https://sepolia.basescan.org/address/0x1Fe7556e700ED09C0dDb5d9482b7D0c5E477a10c#code

store verified:
https://sepolia.basescan.org/address/0x63706656297A7A94fE052819477BADa37c719F39#code


networks: polygonAmoy
StoreEvent: 0x4fc6E2d500FCA4d55ca971927A1301A5648E95E9
Store: 0xc201Ab5F4e6509312A4B7BEAe19acE56091B86B4
test USDC: 0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582

event verified:
https://amoy.polygonscan.com/address/0x4fc6E2d500FCA4d55ca971927A1301A5648E95E9#code

store verified:
https://amoy.polygonscan.com/address/0xc201Ab5F4e6509312A4B7BEAe19acE56091B86B4#code

///////// deploy only /////////

networks: gnosis chiado
StoreModule#StoreEvent - 0x15A580c90B10bF98dFe66f28B8e96D08150Cb6a4
StoreModule#Store - 0x86440CdFAB1e6A8E32A8A7b4418E3EA6B89E887E

networks: morphTestnet
StoreModule#StoreEvent - 0x0Ef09E113f8a412BaEfa4B2d9a597EeAE1EA84d3
StoreModule#Store - 0x55D30Ba332AdA10478e5aBbcA3400253bD5281E4

networks: lineaTestnet
StoreModule#StoreEvent - 0x0Ef09E113f8a412BaEfa4B2d9a597EeAE1EA84d3
StoreModule#Store - 0x55D30Ba332AdA10478e5aBbcA3400253bD5281E4

networks: mantleSepolia
StoreModule#StoreEvent - 0x0Ef09E113f8a412BaEfa4B2d9a597EeAE1EA84d3
StoreModule#Store - 0x55D30Ba332AdA10478e5aBbcA3400253bD5281E4


networks:
networks:
networks:
networks:
networks: