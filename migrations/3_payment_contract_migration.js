const PaymentContract = artifacts.require("PaymentContract");
const paymentTokenAddress = "0xb36faaA498D6E40Ee030fF651330aefD1b8D24D2";

module.exports = function (deployer, network, addresses) {
  if (network === "development") {
    deployer.deploy(PaymentContract, paymentTokenAddress);
  } else if (network === "matic") {
    deployer.deploy(PaymentContract, paymentTokenAddress);
  }
};
