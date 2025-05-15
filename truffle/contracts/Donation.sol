// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Donation {
    address public owner;
    address public constant recipient = 0x839C52D46Ed76CfdCa1c06f8D4fBB5A67f0eEbF2;

    uint public totalDonations;
    uint public constant threshold = 10 ether;

    struct Donor {
        address addr;
        uint amount;
    }

    Donor[] public donors;

    event Donated(address indexed donor, uint amount);
    event TransferredToRecipient(uint amount);

    constructor() {
        owner = msg.sender;
    }

    function donate() external payable {
        require(msg.value > 0, "Donation must be greater than 0");

        donors.push(Donor(msg.sender, msg.value));
        totalDonations += msg.value;

        emit Donated(msg.sender, msg.value);

        // Jika sudah mencapai 10 ETH, langsung transfer ke wallet tujuan
        if (totalDonations >= threshold) {
            uint amountToSend = totalDonations;
            totalDonations = 0;

            (bool sent, ) = payable(recipient).call{value: amountToSend}("");
            require(sent, "Failed to send Ether to recipient");

            emit TransferredToRecipient(amountToSend);
        }
    }

    function getDonorsCount() public view returns (uint) {
        return donors.length;
    }

    function getDonor(uint index) public view returns (address, uint) {
        require(index < donors.length, "Index out of bounds");
        Donor memory d = donors[index];
        return (d.addr, d.amount);
    }
}
