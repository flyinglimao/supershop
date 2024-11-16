import { ethers } from "hardhat";
import { Store } from "../typechain-types/contracts/Store";
import { base_sepolia_storeAddress, polygon_amoy_storeAddress } from "../const";

// type ItemInfo = {
//   itemId: number;
//   name: string;
//   price: bigint;
//   picture: string;
//   spec: string;
//   description: string;
//   stock: number;
//   tags: string[];
//   enable: boolean;
//   metadata: `0x${string}`;
// };

// function emitSome() external {
//     emit Some(
//         msg.sender,
//         1,
//         abi.encode(
//             abi.encode("name", "string", "some"),
//             abi.encode("name", "some"),
//             abi.encode("name", "some"),
//             abi.encode("tag", abi.encode(["tag1", "tag2"]))
//         )
//     );
// }

const abiCoder = new ethers.AbiCoder();
const itemList: Store.ItemInfoStruct[] = [
  {
    itemId: 1,
    name: "ETH T Shirts",
    price: ethers.parseEther("5"),
    picture: "https://silver-kangaroo-a65114.netlify.app/eth.png",
    spec: "color: white",
    description: "Proof of MEGA",
    stock: 10,
    tags: ["size:S"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: ethers.concat([
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("name"),
          ethers.encodeBytes32String("string"),
          "ETH T Shirts",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("color"),
          ethers.encodeBytes32String("string"),
          "White",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("description"),
          ethers.encodeBytes32String("string"),
          "Proof of MEGA",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("size"),
          ethers.encodeBytes32String("string"),
          "S",
        ]
      ),
    ]),
  },
  {
    itemId: 2,
    name: "ETH T Shirts",
    price: ethers.parseEther("5"),
    picture: "https://silver-kangaroo-a65114.netlify.app/eth.png",
    spec: "color: white",
    description: "Proof of MEGA",
    stock: 1,
    tags: ["Size: M"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: ethers.concat([
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("name"),
          ethers.encodeBytes32String("string"),
          "ETH T Shirts",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("color"),
          ethers.encodeBytes32String("string"),
          "White",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("description"),
          ethers.encodeBytes32String("string"),
          "Proof of MEGA",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("size"),
          ethers.encodeBytes32String("string"),
          "M",
        ]
      ),
    ]),
  },
  {
    itemId: 3,
    name: "ETH T Shirts",
    price: ethers.parseEther("5"),
    picture: "https://silver-kangaroo-a65114.netlify.app/eth.png",
    spec: "color: white",
    description: "Proof of MEGA",
    stock: 7,
    tags: ["Size: L"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: ethers.concat([
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("name"),
          ethers.encodeBytes32String("string"),
          "ETH T Shirts",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("color"),
          ethers.encodeBytes32String("string"),
          "White",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("description"),
          ethers.encodeBytes32String("string"),
          "Proof of MEGA",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("size"),
          ethers.encodeBytes32String("string"),
          "L",
        ]
      ),
    ]),
  },
  {
    itemId: 4,
    name: "Base T Shirts",
    price: ethers.parseEther("5"),
    picture: "https://silver-kangaroo-a65114.netlify.app/base.png",
    spec: "color: gray",
    description: "Onchain summer",
    stock: 10,
    tags: ["Size: S"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: ethers.concat([
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("name"),
          ethers.encodeBytes32String("string"),
          "Base T Shirts",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("color"),
          ethers.encodeBytes32String("string"),
          "Gray",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("description"),
          ethers.encodeBytes32String("string"),
          "Onchain summer",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("size"),
          ethers.encodeBytes32String("string"),
          "S",
        ]
      ),
    ]),
  },
  {
    itemId: 5,
    name: "Base T Shirts",
    price: ethers.parseEther("5"),
    picture: "https://silver-kangaroo-a65114.netlify.app/base.png",
    spec: "color: gray",
    description: "Onchain summer",
    stock: 2,
    tags: ["Size: M"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: ethers.concat([
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("name"),
          ethers.encodeBytes32String("string"),
          "Base T Shirts",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("color"),
          ethers.encodeBytes32String("string"),
          "Gray",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("description"),
          ethers.encodeBytes32String("string"),
          "Onchain summer",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("size"),
          ethers.encodeBytes32String("string"),
          "M",
        ]
      ),
    ]),
  },
  {
    itemId: 6,
    name: "Base T Shirts",
    price: ethers.parseEther("5"),
    picture: "https://silver-kangaroo-a65114.netlify.app/base.png",
    spec: "color: gray",
    description: "Onchain summer",
    stock: 7,
    tags: ["Size: L"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: ethers.concat([
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("name"),
          ethers.encodeBytes32String("string"),
          "Base T Shirts",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("color"),
          ethers.encodeBytes32String("string"),
          "Gray",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("description"),
          ethers.encodeBytes32String("string"),
          "Onchain summer",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("size"),
          ethers.encodeBytes32String("string"),
          "L",
        ]
      ),
    ]),
  },
  {
    itemId: 7,
    name: "Uniswap T Shirts",
    price: ethers.parseEther("5"),
    picture: "https://silver-kangaroo-a65114.netlify.app/uniswap.png",
    spec: "color: black",
    description: "DeFi lover",
    stock: 3,
    tags: ["Size: S"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: ethers.concat([
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("name"),
          ethers.encodeBytes32String("string"),
          "Uniswap T Shirts",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("color"),
          ethers.encodeBytes32String("string"),
          "Black",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("description"),
          ethers.encodeBytes32String("string"),
          "DeFi lover",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("size"),
          ethers.encodeBytes32String("string"),
          "S",
        ]
      ),
    ]),
  },
  {
    itemId: 8,
    name: "Uniswap T Shirts",
    price: ethers.parseEther("5"),
    picture: "https://silver-kangaroo-a65114.netlify.app/uniswap.png",
    spec: "color: black",
    description: "DeFi lover",
    stock: 1,
    tags: ["Size: M"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: ethers.concat([
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("name"),
          ethers.encodeBytes32String("string"),
          "Uniswap T Shirts",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("color"),
          ethers.encodeBytes32String("string"),
          "Black",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("description"),
          ethers.encodeBytes32String("string"),
          "DeFi lover",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("size"),
          ethers.encodeBytes32String("string"),
          "M",
        ]
      ),
    ]),
  },
  {
    itemId: 9,
    name: "Uniswap T Shirts",
    price: ethers.parseEther("5"),
    picture: "https://silver-kangaroo-a65114.netlify.app/uniswap.png",
    spec: "color: black",
    description: "DeFi lover",
    stock: 4,
    tags: ["Size: L"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: ethers.concat([
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("name"),
          ethers.encodeBytes32String("string"),
          "Uniswap T Shirts",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("color"),
          ethers.encodeBytes32String("string"),
          "Black",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("description"),
          ethers.encodeBytes32String("string"),
          "DeFi lover",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("size"),
          ethers.encodeBytes32String("string"),
          "L",
        ]
      ),
    ]),
  },
  {
    itemId: 10,
    name: "Celo T shirts",
    price: ethers.parseEther("5"),
    picture: "https://silver-kangaroo-a65114.netlify.app/celo.png",
    spec: "color: yellow",
    description: "Crypto is useless",
    stock: 10,
    tags: ["Size: S"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: ethers.concat([
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("name"),
          ethers.encodeBytes32String("string"),
          "Celo T shirts",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("color"),
          ethers.encodeBytes32String("string"),
          "Yellow",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("description"),
          ethers.encodeBytes32String("string"),
          "Crypto is useless",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("size"),
          ethers.encodeBytes32String("string"),
          "S",
        ]
      ),
    ]),
  },
  {
    itemId: 11,
    name: "Celo T shirts",
    price: ethers.parseEther("5"),
    picture: "https://silver-kangaroo-a65114.netlify.app/celo.png",
    spec: "color: yellow",
    description: "Crypto is useless",
    stock: 10,
    tags: ["Size: M"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: ethers.concat([
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("name"),
          ethers.encodeBytes32String("string"),
          "Celo T shirts",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("color"),
          ethers.encodeBytes32String("string"),
          "Yellow",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("description"),
          ethers.encodeBytes32String("string"),
          "Crypto is useless",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("size"),
          ethers.encodeBytes32String("string"),
          "M",
        ]
      ),
    ]),
  },
  {
    itemId: 12,
    name: "Celo T shirts",
    price: ethers.parseEther("5"),
    picture: "https://silver-kangaroo-a65114.netlify.app/celo.png",
    spec: "color:Yellow,",
    description: "Crypto is useless",
    stock: 10,
    tags: ["Size: L"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: ethers.concat([
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("name"),
          ethers.encodeBytes32String("string"),
          "Celo T shirts",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("color"),
          ethers.encodeBytes32String("string"),
          "Yellow",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("description"),
          ethers.encodeBytes32String("string"),
          "Crypto is useless",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("size"),
          ethers.encodeBytes32String("string"),
          "L",
        ]
      ),
    ]),
  },
  {
    itemId: 13,
    name: "Eth pants",
    price: ethers.parseEther("5"),
    picture: "https://silver-kangaroo-a65114.netlify.app/eth-pant.png",
    spec: "color: gray",
    description: "MEGA pants",
    stock: 3,
    tags: ["Size: S"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: ethers.concat([
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("name"),
          ethers.encodeBytes32String("string"),
          "Eth pants",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("color"),
          ethers.encodeBytes32String("string"),
          "Gray",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("description"),
          ethers.encodeBytes32String("string"),
          "MEGA pants",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("size"),
          ethers.encodeBytes32String("string"),
          "S",
        ]
      ),
    ]),
  },
  {
    itemId: 14,
    name: "Eth pants",
    price: ethers.parseEther("5"),
    picture: "https://silver-kangaroo-a65114.netlify.app/eth-pant.png",
    spec: "color: gray",
    description: "MEGA pants",
    stock: 3,
    tags: ["Size: M"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: ethers.concat([
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("name"),
          ethers.encodeBytes32String("string"),
          "Eth pants",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("color"),
          ethers.encodeBytes32String("string"),
          "Gray",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("description"),
          ethers.encodeBytes32String("string"),
          "MEGA pants",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("size"),
          ethers.encodeBytes32String("string"),
          "M",
        ]
      ),
    ]),
  },
  {
    itemId: 15,
    name: "Eth pants",
    price: ethers.parseEther("5"),
    picture: "https://silver-kangaroo-a65114.netlify.app/eth-pant.png",
    spec: "color: gray",
    description: "MEGA pants",
    stock: 3,
    tags: ["Size: L"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: ethers.concat([
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("name"),
          ethers.encodeBytes32String("string"),
          "Eth pants",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("color"),
          ethers.encodeBytes32String("string"),
          "Gray",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("description"),
          ethers.encodeBytes32String("string"),
          "MEGA pants",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("size"),
          ethers.encodeBytes32String("string"),
          "L",
        ]
      ),
    ]),
  },
  {
    itemId: 16,
    name: "Base Pants",
    price: ethers.parseEther("5"),
    picture: "https://silver-kangaroo-a65114.netlify.app/base-pant.png",
    spec: "color: blue",
    description: "On-chain jeans",
    stock: 5,
    tags: ["Size: S"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: ethers.concat([
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("name"),
          ethers.encodeBytes32String("string"),
          "Base Pants",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("color"),
          ethers.encodeBytes32String("string"),
          "Blue",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("description"),
          ethers.encodeBytes32String("string"),
          "On-chain jeans",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("size"),
          ethers.encodeBytes32String("string"),
          "S",
        ]
      ),
    ]),
  },
  {
    itemId: 17,
    name: "Base Pants",
    price: ethers.parseEther("5"),
    picture: "https://silver-kangaroo-a65114.netlify.app/base-pant.png",
    spec: "color: blue",
    description: "On-chain jeans",
    stock: 5,
    tags: ["Size: M"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: ethers.concat([
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("name"),
          ethers.encodeBytes32String("string"),
          "Base Pants",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("color"),
          ethers.encodeBytes32String("string"),
          "Blue",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("description"),
          ethers.encodeBytes32String("string"),
          "On-chain jeans",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("size"),
          ethers.encodeBytes32String("string"),
          "M",
        ]
      ),
    ]),
  },
  {
    itemId: 18,
    name: "Base Pants",
    price: ethers.parseEther("5"),
    picture: "https://silver-kangaroo-a65114.netlify.app/base-pant.png",
    spec: "color: blue",
    description: "On-chain jeans",
    stock: 5,
    tags: ["Size: L"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: ethers.concat([
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("name"),
          ethers.encodeBytes32String("string"),
          "Base Pants",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("color"),
          ethers.encodeBytes32String("string"),
          "Blue",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("description"),
          ethers.encodeBytes32String("string"),
          "On-chain jeans",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("size"),
          ethers.encodeBytes32String("string"),
          "L",
        ]
      ),
    ]),
  },
  {
    itemId: 19,
    name: "Uniswap Pants",
    price: ethers.parseEther("5"),
    picture: "https://silver-kangaroo-a65114.netlify.app/uniswap-pant.png",
    spec: "color: black",
    description: "DeFi pants",
    stock: 10,
    tags: ["Size: S"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: ethers.concat([
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("name"),
          ethers.encodeBytes32String("string"),
          "Uniswap Pants",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("color"),
          ethers.encodeBytes32String("string"),
          "Black",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("description"),
          ethers.encodeBytes32String("string"),
          "DeFi pants",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("size"),
          ethers.encodeBytes32String("string"),
          "S",
        ]
      ),
    ]),
  },
  {
    itemId: 20,
    name: "Uniswap Pants",
    price: ethers.parseEther("5"),
    picture: "https://silver-kangaroo-a65114.netlify.app/uniswap-pant.png",
    spec: "color: black",
    description: "DeFi pants",
    stock: 10,
    tags: ["Size: M"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: ethers.concat([
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("name"),
          ethers.encodeBytes32String("string"),
          "Uniswap Pants",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("color"),
          ethers.encodeBytes32String("string"),
          "Black",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("description"),
          ethers.encodeBytes32String("string"),
          "DeFi pants",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("size"),
          ethers.encodeBytes32String("string"),
          "M",
        ]
      ),
    ]),
  },
  {
    itemId: 21,
    name: "Uniswap Pants",
    price: ethers.parseEther("5"),
    picture: "https://silver-kangaroo-a65114.netlify.app/uniswap-pant.png",
    spec: "color: black",
    description: "DeFi pants",
    stock: 10,
    tags: ["Size: L"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: ethers.concat([
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("name"),
          ethers.encodeBytes32String("string"),
          "Uniswap Pants",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("color"),
          ethers.encodeBytes32String("string"),
          "Black",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("description"),
          ethers.encodeBytes32String("string"),
          "DeFi pants",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("size"),
          ethers.encodeBytes32String("string"),
          "L",
        ]
      ),
    ]),
  },
  {
    itemId: 22,
    name: "Celo Pants",
    price: ethers.parseEther("5"),
    picture: "https://silver-kangaroo-a65114.netlify.app/celo-pant.png",
    spec: "color: yellow",
    description: "New crypto pants",
    stock: 10,
    tags: ["Size: M"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: ethers.concat([
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("name"),
          ethers.encodeBytes32String("string"),
          "Celo Pants",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("color"),
          ethers.encodeBytes32String("string"),
          "Yellow",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("description"),
          ethers.encodeBytes32String("string"),
          "New crypto pants",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("size"),
          ethers.encodeBytes32String("string"),
          "M",
        ]
      ),
    ]),
  },
  {
    itemId: 23,
    name: "Celo Pants",
    price: ethers.parseEther("5"),
    picture: "https://silver-kangaroo-a65114.netlify.app/celo-pant.png",
    spec: "color: yellow",
    description: "New crypto pants",
    stock: 1,
    tags: ["Size: L"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: ethers.concat([
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("name"),
          ethers.encodeBytes32String("string"),
          "Celo Pants",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("color"),
          ethers.encodeBytes32String("string"),
          "Yellow",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("description"),
          ethers.encodeBytes32String("string"),
          "New crypto pants",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("size"),
          ethers.encodeBytes32String("string"),
          "L",
        ]
      ),
    ]),
  },
  {
    itemId: 24,
    name: "Celo Pants",
    price: ethers.parseEther("5"),
    picture: "https://silver-kangaroo-a65114.netlify.app/celo-pant.png",
    spec: "color: yellow",
    description: "New crypto pants",
    stock: 5,
    tags: ["Size: S"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: ethers.concat([
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("name"),
          ethers.encodeBytes32String("string"),
          "Celo Pants",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("color"),
          ethers.encodeBytes32String("string"),
          "Yellow",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("description"),
          ethers.encodeBytes32String("string"),
          "New crypto pants",
        ]
      ),
      abiCoder.encode(
        ["bytes32", "bytes32", "string"],
        [
          ethers.encodeBytes32String("size"),
          ethers.encodeBytes32String("string"),
          "S",
        ]
      ),
    ]),
  },
];

async function main() {
  const store = await ethers.getContractAt("Store", polygon_amoy_storeAddress);

  for (const item of itemList) {
    const releaseItemTx = await store.releaseItem(item.itemId, item);
    await releaseItemTx.wait();
    console.log(`Item ${item.itemId} released`);
  }

  console.log("All items released");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
