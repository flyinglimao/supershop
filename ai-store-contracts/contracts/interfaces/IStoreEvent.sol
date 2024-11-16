// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

interface IStoreEvent {
    event ReleaseItemEvent(
        uint256 indexed itemId,
        uint256 indexed price,
        address indexed store,
        string itemName,
        string itemDescription,
        string[] tags,
        bytes metadata
    );

    event RemoveItemEvent(
        uint256 indexed itemId,
        address indexed store,
        string itemName,
        string itemDescription,
        string[] tags
    );

    event RegisterStoreEvent(address store);

    function releaseItem(
        uint256 _itemId,
        uint256 _price,
        string memory _itemName,
        string memory _itemDes,
        string[] memory tag,
        bytes memory metadata
    ) external;

    function removeItem(
        uint256 _itemId,
        string memory _itemName,
        string memory _itemDes,
        string[] memory tag
    ) external;

    function registerStore(address _newStore) external;
}
