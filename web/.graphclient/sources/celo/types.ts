// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace CeloTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Item = {
  id: Scalars['String']['output'];
  itemId: Scalars['BigInt']['output'];
  price: Scalars['BigInt']['output'];
  store: Scalars['Bytes']['output'];
  itemName: Scalars['String']['output'];
  itemDescription: Scalars['String']['output'];
  tags: Array<Scalars['String']['output']>;
  metadata: Scalars['Bytes']['output'];
  active: Scalars['Boolean']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Item_filter = {
  id?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemId?: InputMaybe<Scalars['BigInt']['input']>;
  itemId_not?: InputMaybe<Scalars['BigInt']['input']>;
  itemId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  itemId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  itemId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  itemId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  itemId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  itemId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price?: InputMaybe<Scalars['BigInt']['input']>;
  price_not?: InputMaybe<Scalars['BigInt']['input']>;
  price_gt?: InputMaybe<Scalars['BigInt']['input']>;
  price_lt?: InputMaybe<Scalars['BigInt']['input']>;
  price_gte?: InputMaybe<Scalars['BigInt']['input']>;
  price_lte?: InputMaybe<Scalars['BigInt']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  store?: InputMaybe<Scalars['Bytes']['input']>;
  store_not?: InputMaybe<Scalars['Bytes']['input']>;
  store_gt?: InputMaybe<Scalars['Bytes']['input']>;
  store_lt?: InputMaybe<Scalars['Bytes']['input']>;
  store_gte?: InputMaybe<Scalars['Bytes']['input']>;
  store_lte?: InputMaybe<Scalars['Bytes']['input']>;
  store_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  store_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  store_contains?: InputMaybe<Scalars['Bytes']['input']>;
  store_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  itemName?: InputMaybe<Scalars['String']['input']>;
  itemName_not?: InputMaybe<Scalars['String']['input']>;
  itemName_gt?: InputMaybe<Scalars['String']['input']>;
  itemName_lt?: InputMaybe<Scalars['String']['input']>;
  itemName_gte?: InputMaybe<Scalars['String']['input']>;
  itemName_lte?: InputMaybe<Scalars['String']['input']>;
  itemName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemName_contains?: InputMaybe<Scalars['String']['input']>;
  itemName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemName_not_contains?: InputMaybe<Scalars['String']['input']>;
  itemName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemName_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemName_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemDescription?: InputMaybe<Scalars['String']['input']>;
  itemDescription_not?: InputMaybe<Scalars['String']['input']>;
  itemDescription_gt?: InputMaybe<Scalars['String']['input']>;
  itemDescription_lt?: InputMaybe<Scalars['String']['input']>;
  itemDescription_gte?: InputMaybe<Scalars['String']['input']>;
  itemDescription_lte?: InputMaybe<Scalars['String']['input']>;
  itemDescription_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemDescription_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemDescription_contains?: InputMaybe<Scalars['String']['input']>;
  itemDescription_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  itemDescription_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemDescription_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemDescription_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemDescription_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemDescription_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_not?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata?: InputMaybe<Scalars['Bytes']['input']>;
  metadata_not?: InputMaybe<Scalars['Bytes']['input']>;
  metadata_gt?: InputMaybe<Scalars['Bytes']['input']>;
  metadata_lt?: InputMaybe<Scalars['Bytes']['input']>;
  metadata_gte?: InputMaybe<Scalars['Bytes']['input']>;
  metadata_lte?: InputMaybe<Scalars['Bytes']['input']>;
  metadata_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  metadata_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  metadata_contains?: InputMaybe<Scalars['Bytes']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  active_not?: InputMaybe<Scalars['Boolean']['input']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Item_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Item_filter>>>;
};

export type Item_orderBy =
  | 'id'
  | 'itemId'
  | 'price'
  | 'store'
  | 'itemName'
  | 'itemDescription'
  | 'tags'
  | 'metadata'
  | 'active'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type OwnershipTransferred = {
  id: Scalars['Bytes']['output'];
  previousOwner: Scalars['Bytes']['output'];
  newOwner: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type OwnershipTransferred_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  previousOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  previousOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OwnershipTransferred_filter>>>;
  or?: InputMaybe<Array<InputMaybe<OwnershipTransferred_filter>>>;
};

export type OwnershipTransferred_orderBy =
  | 'id'
  | 'previousOwner'
  | 'newOwner'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Query = {
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  registerStoreEvent?: Maybe<RegisterStoreEvent>;
  registerStoreEvents: Array<RegisterStoreEvent>;
  releaseItemEvent?: Maybe<ReleaseItemEvent>;
  releaseItemEvents: Array<ReleaseItemEvent>;
  removeItemEvent?: Maybe<RemoveItemEvent>;
  removeItemEvents: Array<RemoveItemEvent>;
  item?: Maybe<Item>;
  items: Array<Item>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryownershipTransferredArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryownershipTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnershipTransferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OwnershipTransferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryregisterStoreEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryregisterStoreEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RegisterStoreEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RegisterStoreEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryreleaseItemEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryreleaseItemEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReleaseItemEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ReleaseItemEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryremoveItemEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryremoveItemEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RemoveItemEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RemoveItemEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryitemArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryitemsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Item_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Item_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type RegisterStoreEvent = {
  id: Scalars['Bytes']['output'];
  store: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RegisterStoreEvent_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  store?: InputMaybe<Scalars['Bytes']['input']>;
  store_not?: InputMaybe<Scalars['Bytes']['input']>;
  store_gt?: InputMaybe<Scalars['Bytes']['input']>;
  store_lt?: InputMaybe<Scalars['Bytes']['input']>;
  store_gte?: InputMaybe<Scalars['Bytes']['input']>;
  store_lte?: InputMaybe<Scalars['Bytes']['input']>;
  store_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  store_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  store_contains?: InputMaybe<Scalars['Bytes']['input']>;
  store_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RegisterStoreEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RegisterStoreEvent_filter>>>;
};

export type RegisterStoreEvent_orderBy =
  | 'id'
  | 'store'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type ReleaseItemEvent = {
  id: Scalars['Bytes']['output'];
  itemId: Scalars['BigInt']['output'];
  price: Scalars['BigInt']['output'];
  store: Scalars['Bytes']['output'];
  itemName: Scalars['String']['output'];
  itemDescription: Scalars['String']['output'];
  tags: Array<Scalars['String']['output']>;
  metadata: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ReleaseItemEvent_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  itemId?: InputMaybe<Scalars['BigInt']['input']>;
  itemId_not?: InputMaybe<Scalars['BigInt']['input']>;
  itemId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  itemId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  itemId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  itemId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  itemId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  itemId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price?: InputMaybe<Scalars['BigInt']['input']>;
  price_not?: InputMaybe<Scalars['BigInt']['input']>;
  price_gt?: InputMaybe<Scalars['BigInt']['input']>;
  price_lt?: InputMaybe<Scalars['BigInt']['input']>;
  price_gte?: InputMaybe<Scalars['BigInt']['input']>;
  price_lte?: InputMaybe<Scalars['BigInt']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  store?: InputMaybe<Scalars['Bytes']['input']>;
  store_not?: InputMaybe<Scalars['Bytes']['input']>;
  store_gt?: InputMaybe<Scalars['Bytes']['input']>;
  store_lt?: InputMaybe<Scalars['Bytes']['input']>;
  store_gte?: InputMaybe<Scalars['Bytes']['input']>;
  store_lte?: InputMaybe<Scalars['Bytes']['input']>;
  store_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  store_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  store_contains?: InputMaybe<Scalars['Bytes']['input']>;
  store_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  itemName?: InputMaybe<Scalars['String']['input']>;
  itemName_not?: InputMaybe<Scalars['String']['input']>;
  itemName_gt?: InputMaybe<Scalars['String']['input']>;
  itemName_lt?: InputMaybe<Scalars['String']['input']>;
  itemName_gte?: InputMaybe<Scalars['String']['input']>;
  itemName_lte?: InputMaybe<Scalars['String']['input']>;
  itemName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemName_contains?: InputMaybe<Scalars['String']['input']>;
  itemName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemName_not_contains?: InputMaybe<Scalars['String']['input']>;
  itemName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemName_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemName_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemDescription?: InputMaybe<Scalars['String']['input']>;
  itemDescription_not?: InputMaybe<Scalars['String']['input']>;
  itemDescription_gt?: InputMaybe<Scalars['String']['input']>;
  itemDescription_lt?: InputMaybe<Scalars['String']['input']>;
  itemDescription_gte?: InputMaybe<Scalars['String']['input']>;
  itemDescription_lte?: InputMaybe<Scalars['String']['input']>;
  itemDescription_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemDescription_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemDescription_contains?: InputMaybe<Scalars['String']['input']>;
  itemDescription_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  itemDescription_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemDescription_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemDescription_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemDescription_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemDescription_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_not?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata?: InputMaybe<Scalars['Bytes']['input']>;
  metadata_not?: InputMaybe<Scalars['Bytes']['input']>;
  metadata_gt?: InputMaybe<Scalars['Bytes']['input']>;
  metadata_lt?: InputMaybe<Scalars['Bytes']['input']>;
  metadata_gte?: InputMaybe<Scalars['Bytes']['input']>;
  metadata_lte?: InputMaybe<Scalars['Bytes']['input']>;
  metadata_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  metadata_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  metadata_contains?: InputMaybe<Scalars['Bytes']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ReleaseItemEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ReleaseItemEvent_filter>>>;
};

export type ReleaseItemEvent_orderBy =
  | 'id'
  | 'itemId'
  | 'price'
  | 'store'
  | 'itemName'
  | 'itemDescription'
  | 'tags'
  | 'metadata'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type RemoveItemEvent = {
  id: Scalars['Bytes']['output'];
  itemId: Scalars['BigInt']['output'];
  store: Scalars['Bytes']['output'];
  itemName: Scalars['String']['output'];
  itemDescription: Scalars['String']['output'];
  tags: Array<Scalars['String']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RemoveItemEvent_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  itemId?: InputMaybe<Scalars['BigInt']['input']>;
  itemId_not?: InputMaybe<Scalars['BigInt']['input']>;
  itemId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  itemId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  itemId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  itemId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  itemId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  itemId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  store?: InputMaybe<Scalars['Bytes']['input']>;
  store_not?: InputMaybe<Scalars['Bytes']['input']>;
  store_gt?: InputMaybe<Scalars['Bytes']['input']>;
  store_lt?: InputMaybe<Scalars['Bytes']['input']>;
  store_gte?: InputMaybe<Scalars['Bytes']['input']>;
  store_lte?: InputMaybe<Scalars['Bytes']['input']>;
  store_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  store_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  store_contains?: InputMaybe<Scalars['Bytes']['input']>;
  store_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  itemName?: InputMaybe<Scalars['String']['input']>;
  itemName_not?: InputMaybe<Scalars['String']['input']>;
  itemName_gt?: InputMaybe<Scalars['String']['input']>;
  itemName_lt?: InputMaybe<Scalars['String']['input']>;
  itemName_gte?: InputMaybe<Scalars['String']['input']>;
  itemName_lte?: InputMaybe<Scalars['String']['input']>;
  itemName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemName_contains?: InputMaybe<Scalars['String']['input']>;
  itemName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemName_not_contains?: InputMaybe<Scalars['String']['input']>;
  itemName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemName_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemName_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemDescription?: InputMaybe<Scalars['String']['input']>;
  itemDescription_not?: InputMaybe<Scalars['String']['input']>;
  itemDescription_gt?: InputMaybe<Scalars['String']['input']>;
  itemDescription_lt?: InputMaybe<Scalars['String']['input']>;
  itemDescription_gte?: InputMaybe<Scalars['String']['input']>;
  itemDescription_lte?: InputMaybe<Scalars['String']['input']>;
  itemDescription_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemDescription_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemDescription_contains?: InputMaybe<Scalars['String']['input']>;
  itemDescription_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  itemDescription_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemDescription_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemDescription_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemDescription_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemDescription_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_not?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RemoveItemEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RemoveItemEvent_filter>>>;
};

export type RemoveItemEvent_orderBy =
  | 'id'
  | 'itemId'
  | 'store'
  | 'itemName'
  | 'itemDescription'
  | 'tags'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Subscription = {
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  registerStoreEvent?: Maybe<RegisterStoreEvent>;
  registerStoreEvents: Array<RegisterStoreEvent>;
  releaseItemEvent?: Maybe<ReleaseItemEvent>;
  releaseItemEvents: Array<ReleaseItemEvent>;
  removeItemEvent?: Maybe<RemoveItemEvent>;
  removeItemEvents: Array<RemoveItemEvent>;
  item?: Maybe<Item>;
  items: Array<Item>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionownershipTransferredArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionownershipTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnershipTransferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OwnershipTransferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionregisterStoreEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionregisterStoreEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RegisterStoreEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RegisterStoreEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionreleaseItemEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionreleaseItemEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReleaseItemEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ReleaseItemEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionremoveItemEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionremoveItemEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RemoveItemEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RemoveItemEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionitemArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionitemsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Item_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Item_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  ownershipTransferred: InContextSdkMethod<Query['ownershipTransferred'], QueryownershipTransferredArgs, MeshContext>,
  /** null **/
  ownershipTransferreds: InContextSdkMethod<Query['ownershipTransferreds'], QueryownershipTransferredsArgs, MeshContext>,
  /** null **/
  registerStoreEvent: InContextSdkMethod<Query['registerStoreEvent'], QueryregisterStoreEventArgs, MeshContext>,
  /** null **/
  registerStoreEvents: InContextSdkMethod<Query['registerStoreEvents'], QueryregisterStoreEventsArgs, MeshContext>,
  /** null **/
  releaseItemEvent: InContextSdkMethod<Query['releaseItemEvent'], QueryreleaseItemEventArgs, MeshContext>,
  /** null **/
  releaseItemEvents: InContextSdkMethod<Query['releaseItemEvents'], QueryreleaseItemEventsArgs, MeshContext>,
  /** null **/
  removeItemEvent: InContextSdkMethod<Query['removeItemEvent'], QueryremoveItemEventArgs, MeshContext>,
  /** null **/
  removeItemEvents: InContextSdkMethod<Query['removeItemEvents'], QueryremoveItemEventsArgs, MeshContext>,
  /** null **/
  item: InContextSdkMethod<Query['item'], QueryitemArgs, MeshContext>,
  /** null **/
  items: InContextSdkMethod<Query['items'], QueryitemsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  ownershipTransferred: InContextSdkMethod<Subscription['ownershipTransferred'], SubscriptionownershipTransferredArgs, MeshContext>,
  /** null **/
  ownershipTransferreds: InContextSdkMethod<Subscription['ownershipTransferreds'], SubscriptionownershipTransferredsArgs, MeshContext>,
  /** null **/
  registerStoreEvent: InContextSdkMethod<Subscription['registerStoreEvent'], SubscriptionregisterStoreEventArgs, MeshContext>,
  /** null **/
  registerStoreEvents: InContextSdkMethod<Subscription['registerStoreEvents'], SubscriptionregisterStoreEventsArgs, MeshContext>,
  /** null **/
  releaseItemEvent: InContextSdkMethod<Subscription['releaseItemEvent'], SubscriptionreleaseItemEventArgs, MeshContext>,
  /** null **/
  releaseItemEvents: InContextSdkMethod<Subscription['releaseItemEvents'], SubscriptionreleaseItemEventsArgs, MeshContext>,
  /** null **/
  removeItemEvent: InContextSdkMethod<Subscription['removeItemEvent'], SubscriptionremoveItemEventArgs, MeshContext>,
  /** null **/
  removeItemEvents: InContextSdkMethod<Subscription['removeItemEvents'], SubscriptionremoveItemEventsArgs, MeshContext>,
  /** null **/
  item: InContextSdkMethod<Subscription['item'], SubscriptionitemArgs, MeshContext>,
  /** null **/
  items: InContextSdkMethod<Subscription['items'], SubscriptionitemsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["celo"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
