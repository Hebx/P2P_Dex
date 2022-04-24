// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.6;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PaymentToken is ERC20 {
    address public owner;
    constructor() ERC20("Payment Token", "PAY") {
        _mint(msg.sender, 100000 * 10**18);
        owner = msg.sender;
    }
}
