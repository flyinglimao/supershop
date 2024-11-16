import {
  OwnershipTransferred as OwnershipTransferredEvent,
  RegisterStoreEvent as RegisterStoreEventEvent,
  ReleaseItemEvent as ReleaseItemEventEvent,
  RemoveItemEvent as RemoveItemEventEvent,
} from "../generated/StoreEvent/StoreEvent";
import {
  Item,
  OwnershipTransferred,
  RegisterStoreEvent,
  ReleaseItemEvent,
  RemoveItemEvent,
} from "../generated/schema";

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRegisterStoreEvent(event: RegisterStoreEventEvent): void {
  let entity = new RegisterStoreEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.store = event.params.store;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleReleaseItemEvent(event: ReleaseItemEventEvent): void {
  let entity = new Item(
    event.params.store.toHexString() + event.params.itemId.toString()
  );
  entity.itemId = event.params.itemId;
  entity.price = event.params.price;
  entity.store = event.params.store;
  entity.itemName = event.params.itemName;
  entity.itemDescription = event.params.itemDescription;
  entity.tags = event.params.tags;
  entity.metadata = event.params.metadata;
  entity.active = true; // if release, to true

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRemoveItemEvent(event: RemoveItemEventEvent): void {
  // let entity = new RemoveItemEvent(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // );
  let entity = new Item(
    event.params.store.toHexString() + event.params.itemId.toString()
  );

  entity.itemId = event.params.itemId;
  entity.store = event.params.store;
  entity.itemName = event.params.itemName;
  entity.itemDescription = event.params.itemDescription;
  entity.tags = event.params.tags;
  entity.active = false; // if release, to true

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
