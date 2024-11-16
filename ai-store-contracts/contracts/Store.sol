// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interfaces/IStoreEvent.sol";

contract Store is Ownable {
    address public storeEvent;
    address public storeOwner;
    address public acceptedToken;

    event UpdateStock(uint256 indexed itemId, uint256 newStock);
    event Withdraw(uint256 amount);

    event BuyEvent(
        uint256 indexed itemId,
        address buyer,
        string itemName,
        uint256 price,
        address seller
    );

    struct ItemInfo {
        uint256 itemId;
        string name;
        uint256 price;
        string picture;
        string spec;
        string description;
        uint256 stock;
        string[] tags;
        bool enable;
        bytes metadata;
    }

    mapping(uint256 => ItemInfo) public items;

    constructor(
        address _storeEvent,
        address _acceptedToken
    ) Ownable(msg.sender) {
        storeEvent = _storeEvent;
        storeOwner = msg.sender;
        acceptedToken = _acceptedToken;
    }

    // onlyOwner actions
    function releaseItem(
        uint256 _itemId,
        ItemInfo memory item
    ) external onlyOwner {
        require(item.enable == false, "Item already in stock");
        item.enable = true;
        items[_itemId] = item;
        IStoreEvent(storeEvent).releaseItem(
            _itemId,
            item.price,
            item.name,
            item.description,
            item.tags,
            item.metadata
        );
    }

    function removeItems(uint256 _itemId) external onlyOwner {
        ItemInfo storage item = items[_itemId];
        require(item.enable == true, "Item not in stock");
        item.enable = false;
        IStoreEvent(storeEvent).removeItem(
            _itemId,
            item.name,
            item.description,
            item.tags
        );
    }

    function updateItemStock(
        uint256 _itemId,
        uint256 _newStock
    ) external onlyOwner {
        // check if the item exists, key is the itemId
        ItemInfo storage item = items[_itemId];
        require(item.enable == true, "Item not in stock");
        item.stock = _newStock;

        emit UpdateStock(_itemId, _newStock);
    }

    // user actions
    function buyItemOne(uint256 _itemId) external {
        // buy an item
        ItemInfo storage item = items[_itemId];
        require(item.enable == true, "Item not in stock");
        require(item.stock > 0, "Item out of stock");

        item.stock = item.stock - 1;

        if (item.stock == 0) {
            item.enable = false;
            IStoreEvent(storeEvent).removeItem(
                _itemId,
                item.name,
                item.description,
                item.tags
            );
        }

        // pay by acceptedToken
        IERC20(acceptedToken).transferFrom(msg.sender, storeOwner, item.price);
        emit BuyEvent(_itemId, msg.sender, item.name, item.price, storeOwner);
    }

    function withdraw(uint256 _amount) external onlyOwner {
        IERC20(acceptedToken).transfer(owner(), _amount);
        emit Withdraw(_amount);
    }
}
