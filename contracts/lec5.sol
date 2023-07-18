// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Hello {
    uint256 public a = 5;
    uint256 private b = 5;
}

contract Public_example {
    uint256 public a = 3;

    function changeA(uint256 _value) public {
        a = _value;
    }

    function get_a() public view returns (uint256) {
        return a;
    }
}

contract Public_example_2 {
    Public_example ins = new Public_example();

    function changeA_2(uint256 _value) public {
        ins.changeA(_value);
    }

    function use_public_example_a() public view returns (uint256) {
        return ins.get_a();
    }
}
