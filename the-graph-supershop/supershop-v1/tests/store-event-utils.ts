import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  RegisterStoreEvent,
  ReleaseItemEvent,
  RemoveItemEvent
} from "../generated/StoreEvent/StoreEvent"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRegisterStoreEventEvent(
  store: Address
): RegisterStoreEvent {
  let registerStoreEventEvent = changetype<RegisterStoreEvent>(newMockEvent())

  registerStoreEventEvent.parameters = new Array()

  registerStoreEventEvent.parameters.push(
    new ethereum.EventParam("store", ethereum.Value.fromAddress(store))
  )

  return registerStoreEventEvent
}

export function createReleaseItemEventEvent(
  itemId: BigInt,
  price: BigInt,
  store: Address,
  itemName: string,
  itemDescription: string,
  tags: Array<string>,
  metadata: Bytes
): ReleaseItemEvent {
  let releaseItemEventEvent = changetype<ReleaseItemEvent>(newMockEvent())

  releaseItemEventEvent.parameters = new Array()

  releaseItemEventEvent.parameters.push(
    new ethereum.EventParam("itemId", ethereum.Value.fromUnsignedBigInt(itemId))
  )
  releaseItemEventEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  releaseItemEventEvent.parameters.push(
    new ethereum.EventParam("store", ethereum.Value.fromAddress(store))
  )
  releaseItemEventEvent.parameters.push(
    new ethereum.EventParam("itemName", ethereum.Value.fromString(itemName))
  )
  releaseItemEventEvent.parameters.push(
    new ethereum.EventParam(
      "itemDescription",
      ethereum.Value.fromString(itemDescription)
    )
  )
  releaseItemEventEvent.parameters.push(
    new ethereum.EventParam("tags", ethereum.Value.fromStringArray(tags))
  )
  releaseItemEventEvent.parameters.push(
    new ethereum.EventParam("metadata", ethereum.Value.fromBytes(metadata))
  )

  return releaseItemEventEvent
}

export function createRemoveItemEventEvent(
  itemId: BigInt,
  store: Address,
  itemName: string,
  itemDescription: string,
  tags: Array<string>
): RemoveItemEvent {
  let removeItemEventEvent = changetype<RemoveItemEvent>(newMockEvent())

  removeItemEventEvent.parameters = new Array()

  removeItemEventEvent.parameters.push(
    new ethereum.EventParam("itemId", ethereum.Value.fromUnsignedBigInt(itemId))
  )
  removeItemEventEvent.parameters.push(
    new ethereum.EventParam("store", ethereum.Value.fromAddress(store))
  )
  removeItemEventEvent.parameters.push(
    new ethereum.EventParam("itemName", ethereum.Value.fromString(itemName))
  )
  removeItemEventEvent.parameters.push(
    new ethereum.EventParam(
      "itemDescription",
      ethereum.Value.fromString(itemDescription)
    )
  )
  removeItemEventEvent.parameters.push(
    new ethereum.EventParam("tags", ethereum.Value.fromStringArray(tags))
  )

  return removeItemEventEvent
}
