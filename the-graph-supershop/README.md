

1. use the following command to init the graph project with the contract address
```bash
graph init --from-contract 0x98A52058268fe0eB9ED985b8856272c1Ff12b012 --network sepolia
```
need to sep up `Subgraph slug` -> project name on graph studio

2. cd <file>
3. yarn add @graphprotocol/graph-ts 
4. fix the `schema.graphql`, add a new type for the entity
```graphql
type Item @entity(immutable: false) {
id: String! #store_itemId
itemId: BigInt! # uint256
price: BigInt! # uint256
store: Bytes! # address
itemName: String! # string
itemDescription: String! # string
tags: [String!]! # string[]
metadata: Bytes! # bytes
active: Boolean! # bool (if release, true, else false)
blockNumber: BigInt!
blockTimestamp: BigInt!
transactionHash: Bytes!
}
```

5. add a entity in `subgraph.yaml` files (entities part)
6. graph codegen
7. fix the handler code in `store-event.ts`
8. graph build 
9. auth the graph account
``` bash
graph auth <DEPLOY_KEY>
```
10. deploy
```bash
graph deploy <SUBGRAPH_SLUG>
```
~~11.  publish ?~~

Deploy to multiple networks:
edit networks.json
