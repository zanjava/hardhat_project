// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Ballot", (m) => {
  const ballot = m.contract("Ballot", [4]);
  return { ballot };
});
