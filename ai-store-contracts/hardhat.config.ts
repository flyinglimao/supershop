import { vars, type HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import "xdeployer";

const config: HardhatUserConfig = {
  sourcify: {
    enabled: true,
    // Optional: specify a different Sourcify server
    apiUrl: "https://sourcify.dev/server",
    // Optional: specify a different Sourcify repository
    browserUrl: "https://repo.sourcify.dev",
  },
  solidity: {
    version: "0.8.27",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  etherscan: {
    apiKey: {
      alfajores: "empty",
      optimismSepolia: vars.get("SEPOLIA_OP_ETHERSCAN_API_KEY"),
      sepolia: vars.get("ETHERSCAN_API_KEY"),
      baseSepolia: vars.get("BASE_SEPOLIA_ETHERSCAN_API_KEY"),
    },
    customChains: [
      {
        network: "alfajores",
        chainId: 44787,
        urls: {
          apiURL: "https://celo-alfajores.blockscout.com/api",
          browserURL: "https://celo-alfajores.blockscout.com",
        },
      },
      {
        network: "morphTestnet",
        chainId: 2810,
        urls: {
          apiURL: "https://rpc-quicknode-holesky.morphl2.io",
          browserURL: "https://explorer-holesky.morphl2.io",
        },
      },
      {
        network: "optimismSepolia",
        chainId: 11155420,
        urls: {
          apiURL: "https://api-sepolia-optimistic.etherscan.io/api",
          browserURL: "https://sepolia-optimism.etherscan.io",
        },
      },
    ],
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${vars.get(
        "ALCHEMY_API_KEY"
      )}`,
      accounts: [
        // dev key, should not be used in production
        vars.get("INITIAL_OWNER_PRIVATE_KEY"),
      ],
    },
    morphTestnet: {
      url: "https://rpc-quicknode-holesky.morphl2.io",
      chainId: 2810,
      accounts: [
        // dev key, should not be used in production
        vars.get("INITIAL_OWNER_PRIVATE_KEY"),
      ],
    },

    mantleSepolia: {
      chainId: 5003,
      url: "https://rpc.sepolia.mantle.xyz", // Sepolia Testnet
      accounts: [vars.get("INITIAL_OWNER_PRIVATE_KEY")],
    },

    baseSepolia: {
      chainId: 84532,
      url: "https://sepolia.base.org",
      accounts: [vars.get("INITIAL_OWNER_PRIVATE_KEY")],
    },

    chiado: {
      chainId: 10200,
      url: "https://rpc.chiadochain.net",
      accounts: [vars.get("INITIAL_OWNER_PRIVATE_KEY")],
    },
    alfajores: {
      chainId: 44787,
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: [vars.get("INITIAL_OWNER_PRIVATE_KEY")],
    },
    lineaTestnet: {
      chainId: 59141,
      url: `https://linea-sepolia.g.alchemy.com/v2/${vars.get(
        "ALCHEMY_API_KEY"
      )}`,
      accounts: [vars.get("INITIAL_OWNER_PRIVATE_KEY")],
    },

    optimismSepolia: {
      chainId: 11155420,
      url: "https://sepolia.optimism.io",
      accounts: [vars.get("INITIAL_OWNER_PRIVATE_KEY")],
    },
  },

  xdeploy: {
    contract: "StoreEvent",
    // constructorArgsPath: "PATH_TO_CONSTRUCTOR_ARGS", // optional; default value is `undefined`
    salt: "test1",
    signer: vars.get("INITIAL_OWNER_PRIVATE_KEY"),
    networks: [
      // "holesky", "amoy",
      // "baseSepolia",
      // "chiado", // gnosis
      // "alfajores", //celo
      // "lineaTestnet",
      // "mantaTestnet",
    ],
    rpcUrls: [
      // "https://eth-holesky.g.alchemy.com/v2/",
      // "https://polygon-amoy.g.alchemy.com/v2/",
      // "https://sepolia.base.org",
      // "https://rpc.chiadochain.net",
      // "https://alfajores-forno.celo-testnet.org",
      // "https://linea-sepolia.g.alchemy.com/v2/",
      // "https://rpc.testnet.mantle.xyz",
    ],
    gasLimit: 1_500_000, // optional; default value is `1.5e6`
  },
};

export default config;
