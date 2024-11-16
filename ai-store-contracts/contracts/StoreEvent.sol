// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract StoreEvent is Ownable {
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

    constructor() Ownable(msg.sender) {}

    // if exist, true
    mapping(address => bool) stores;

    modifier isValidStore() {
        // check if the caller is valid
        require(stores[msg.sender], "Invalid store");
        _;
    }

    function releaseItem(
        uint256 _itemId,
        uint256 _price,
        string memory _itemName,
        string memory _itemDes,
        string[] memory tag,
        bytes memory metadata
    ) public isValidStore {
        // send a release item event
        emit ReleaseItemEvent(
            _itemId,
            _price,
            msg.sender,
            _itemName,
            _itemDes,
            tag,
            metadata
        );
    }

    function removeItem(
        uint256 _itemId,
        string memory _itemName,
        string memory _itemDes,
        string[] memory tag
    ) public isValidStore {
        // send a remove item event
        emit RemoveItemEvent(_itemId, msg.sender, _itemName, _itemDes, tag);
    }

    function registerStore(address _newStore) public onlyOwner {
        stores[_newStore] = true;
        emit RegisterStoreEvent(_newStore);
    }
}
