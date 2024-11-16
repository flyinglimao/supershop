// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { usePersistedOperations } from '@graphql-yoga/plugin-persisted-operations';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { CeloTypes } from './sources/celo/types';
import * as importedModule$0 from "./sources/celo/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Aggregation_interval: Aggregation_interval;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']['output']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']['output']>;
  Item: ResolverTypeWrapper<Item>;
  Item_filter: Item_filter;
  Item_orderBy: Item_orderBy;
  OrderDirection: OrderDirection;
  OwnershipTransferred: ResolverTypeWrapper<OwnershipTransferred>;
  OwnershipTransferred_filter: OwnershipTransferred_filter;
  OwnershipTransferred_orderBy: OwnershipTransferred_orderBy;
  Query: ResolverTypeWrapper<{}>;
  RegisterStoreEvent: ResolverTypeWrapper<RegisterStoreEvent>;
  RegisterStoreEvent_filter: RegisterStoreEvent_filter;
  RegisterStoreEvent_orderBy: RegisterStoreEvent_orderBy;
  ReleaseItemEvent: ResolverTypeWrapper<ReleaseItemEvent>;
  ReleaseItemEvent_filter: ReleaseItemEvent_filter;
  ReleaseItemEvent_orderBy: ReleaseItemEvent_orderBy;
  RemoveItemEvent: ResolverTypeWrapper<RemoveItemEvent>;
  RemoveItemEvent_filter: RemoveItemEvent_filter;
  RemoveItemEvent_orderBy: RemoveItemEvent_orderBy;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']['output']>;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BigDecimal: Scalars['BigDecimal']['output'];
  BigInt: Scalars['BigInt']['output'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean']['output'];
  Bytes: Scalars['Bytes']['output'];
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Int8: Scalars['Int8']['output'];
  Item: Item;
  Item_filter: Item_filter;
  OwnershipTransferred: OwnershipTransferred;
  OwnershipTransferred_filter: OwnershipTransferred_filter;
  Query: {};
  RegisterStoreEvent: RegisterStoreEvent;
  RegisterStoreEvent_filter: RegisterStoreEvent_filter;
  ReleaseItemEvent: ReleaseItemEvent;
  ReleaseItemEvent_filter: ReleaseItemEvent_filter;
  RemoveItemEvent: RemoveItemEvent;
  RemoveItemEvent_filter: RemoveItemEvent_filter;
  String: Scalars['String']['output'];
  Subscription: {};
  Timestamp: Scalars['Timestamp']['output'];
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String']['input'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String']['input'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type ItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  store?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  itemName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  itemDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OwnershipTransferredResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OwnershipTransferred'] = ResolversParentTypes['OwnershipTransferred']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  previousOwner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  newOwner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  ownershipTransferred?: Resolver<Maybe<ResolversTypes['OwnershipTransferred']>, ParentType, ContextType, RequireFields<QueryownershipTransferredArgs, 'id' | 'subgraphError'>>;
  ownershipTransferreds?: Resolver<Array<ResolversTypes['OwnershipTransferred']>, ParentType, ContextType, RequireFields<QueryownershipTransferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  registerStoreEvent?: Resolver<Maybe<ResolversTypes['RegisterStoreEvent']>, ParentType, ContextType, RequireFields<QueryregisterStoreEventArgs, 'id' | 'subgraphError'>>;
  registerStoreEvents?: Resolver<Array<ResolversTypes['RegisterStoreEvent']>, ParentType, ContextType, RequireFields<QueryregisterStoreEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  releaseItemEvent?: Resolver<Maybe<ResolversTypes['ReleaseItemEvent']>, ParentType, ContextType, RequireFields<QueryreleaseItemEventArgs, 'id' | 'subgraphError'>>;
  releaseItemEvents?: Resolver<Array<ResolversTypes['ReleaseItemEvent']>, ParentType, ContextType, RequireFields<QueryreleaseItemEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  removeItemEvent?: Resolver<Maybe<ResolversTypes['RemoveItemEvent']>, ParentType, ContextType, RequireFields<QueryremoveItemEventArgs, 'id' | 'subgraphError'>>;
  removeItemEvents?: Resolver<Array<ResolversTypes['RemoveItemEvent']>, ParentType, ContextType, RequireFields<QueryremoveItemEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<QueryitemArgs, 'id' | 'subgraphError'>>;
  items?: Resolver<Array<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<QueryitemsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type RegisterStoreEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RegisterStoreEvent'] = ResolversParentTypes['RegisterStoreEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  store?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReleaseItemEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ReleaseItemEvent'] = ResolversParentTypes['ReleaseItemEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  store?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  itemName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  itemDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveItemEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RemoveItemEvent'] = ResolversParentTypes['RemoveItemEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  store?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  itemName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  itemDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  ownershipTransferred?: SubscriptionResolver<Maybe<ResolversTypes['OwnershipTransferred']>, "ownershipTransferred", ParentType, ContextType, RequireFields<SubscriptionownershipTransferredArgs, 'id' | 'subgraphError'>>;
  ownershipTransferreds?: SubscriptionResolver<Array<ResolversTypes['OwnershipTransferred']>, "ownershipTransferreds", ParentType, ContextType, RequireFields<SubscriptionownershipTransferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  registerStoreEvent?: SubscriptionResolver<Maybe<ResolversTypes['RegisterStoreEvent']>, "registerStoreEvent", ParentType, ContextType, RequireFields<SubscriptionregisterStoreEventArgs, 'id' | 'subgraphError'>>;
  registerStoreEvents?: SubscriptionResolver<Array<ResolversTypes['RegisterStoreEvent']>, "registerStoreEvents", ParentType, ContextType, RequireFields<SubscriptionregisterStoreEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  releaseItemEvent?: SubscriptionResolver<Maybe<ResolversTypes['ReleaseItemEvent']>, "releaseItemEvent", ParentType, ContextType, RequireFields<SubscriptionreleaseItemEventArgs, 'id' | 'subgraphError'>>;
  releaseItemEvents?: SubscriptionResolver<Array<ResolversTypes['ReleaseItemEvent']>, "releaseItemEvents", ParentType, ContextType, RequireFields<SubscriptionreleaseItemEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  removeItemEvent?: SubscriptionResolver<Maybe<ResolversTypes['RemoveItemEvent']>, "removeItemEvent", ParentType, ContextType, RequireFields<SubscriptionremoveItemEventArgs, 'id' | 'subgraphError'>>;
  removeItemEvents?: SubscriptionResolver<Array<ResolversTypes['RemoveItemEvent']>, "removeItemEvents", ParentType, ContextType, RequireFields<SubscriptionremoveItemEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  item?: SubscriptionResolver<Maybe<ResolversTypes['Item']>, "item", ParentType, ContextType, RequireFields<SubscriptionitemArgs, 'id' | 'subgraphError'>>;
  items?: SubscriptionResolver<Array<ResolversTypes['Item']>, "items", ParentType, ContextType, RequireFields<SubscriptionitemsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parentHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Int8?: GraphQLScalarType;
  Item?: ItemResolvers<ContextType>;
  OwnershipTransferred?: OwnershipTransferredResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RegisterStoreEvent?: RegisterStoreEventResolvers<ContextType>;
  ReleaseItemEvent?: ReleaseItemEventResolvers<ContextType>;
  RemoveItemEvent?: RemoveItemEventResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Timestamp?: GraphQLScalarType;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = CeloTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/celo/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const celoTransforms = [];
const additionalTypeDefs = [] as any[];
const celoHandler = new GraphqlHandler({
              name: "celo",
              config: {"endpoint":"https://api.studio.thegraph.com/query/94899/supershop-v1/version/latest"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("celo"),
              logger: logger.child("celo"),
              importFn,
            });
sources[0] = {
          name: 'celo',
          handler: celoHandler,
          transforms: celoTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })
const documentHashMap = {
        "7d60b229073413013d7557cffc790080909d4552aea21057e236d0c8a68a63c0": SearchItemDocument
      }
additionalEnvelopPlugins.push(usePersistedOperations({
        getPersistedOperation(key) {
          return documentHashMap[key];
        },
        ...{}
      }))

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: SearchItemDocument,
        get rawSDL() {
          return printWithCache(SearchItemDocument);
        },
        location: 'SearchItemDocument.graphql',
        sha256Hash: '7d60b229073413013d7557cffc790080909d4552aea21057e236d0c8a68a63c0'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export const pollingInterval = null;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    if (pollingInterval) {
      setInterval(() => {
        getMeshOptions()
        .then(meshOptions => getMesh(meshOptions))
        .then(newMesh =>
          meshInstance$.then(oldMesh => {
            oldMesh.destroy()
            meshInstance$ = Promise.resolve(newMesh)
          })
        ).catch(err => {
          console.error("Mesh polling failed so the existing version will be used:", err);
        });
      }, pollingInterval)
    }
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type SearchItemQueryVariables = Exact<{
  query?: InputMaybe<Array<InputMaybe<Item_filter>> | InputMaybe<Item_filter>>;
}>;


export type SearchItemQuery = { items: Array<Pick<Item, 'id' | 'itemName' | 'itemDescription' | 'price' | 'metadata'>> };


export const SearchItemDocument = gql`
    query SearchItem($query: [Item_filter]) {
  items(where: {or: $query}) {
    id
    itemName
    itemDescription
    price
    metadata
  }
}
    ` as unknown as DocumentNode<SearchItemQuery, SearchItemQueryVariables>;


export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    SearchItem(variables?: SearchItemQueryVariables, options?: C): Promise<SearchItemQuery> {
      return requester<SearchItemQuery, SearchItemQueryVariables>(SearchItemDocument, variables, options) as Promise<SearchItemQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;