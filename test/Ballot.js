const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { ethers } = require("hardhat") ;
const { expect } = require ("chai");


/**
 * 
 * todo:测试合约
 */

describe("Ballot contract", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployBallotFixture() {
    // Contracts are deployed using the first signer/account by default
    const [chairPerson,account1,account2,account3] = await ethers.getSigners();
    const ballot = await ethers.deployContract("Ballot",[4]);
    return { ballot,chairPerson, account1, account2, account3};
  }
});
