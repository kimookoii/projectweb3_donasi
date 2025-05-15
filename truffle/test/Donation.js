const Donation = artifacts.require("Donation");

contract("Donation", (accounts) => {
  let donationInstance;

  before(async () => {
    donationInstance = await Donation.deployed();
  });

  it("should accept donations and transfer when threshold is met", async () => {
    // Donasi 6 ETH
    await donationInstance.donate({
      from: accounts[1],
      value: web3.utils.toWei("6", "ether"),
    });

    // Donasi 5 ETH, total = 11 ETH (melebihi threshold)
    const tx = await donationInstance.donate({
      from: accounts[2],
      value: web3.utils.toWei("5", "ether"),
    });

    // Verifikasi totalDonations reset
    const totalDonations = await donationInstance.totalDonations();
    assert.equal(
      totalDonations.toString(),
      "0",
      "Total donasi harus reset ke 0 setelah transfer"
    );

    // Verifikasi event
    const logs = tx.logs.filter(
      (log) => log.event === "TransferredToRecipient"
    );
    assert.equal(
      logs.length,
      1,
      "Event TransferredToRecipient harus diterbitkan"
    );
    assert.equal(
      logs[0].args.amount.toString(),
      web3.utils.toWei("11", "ether"),
      "Jumlah yang dikirimkan ke penerima tidak sesuai"
    );
  });

  it("should store donor data correctly", async () => {
    await donationInstance.donate({
      from: accounts[3],
      value: web3.utils.toWei("1", "ether"),
    });

    const donorCount = await donationInstance.getDonorsCount();
    const [addr, amount] = await donationInstance.getDonor(donorCount - 1);

    assert.equal(addr, accounts[3], "Alamat donatur salah");
    assert.equal(
      amount.toString(),
      web3.utils.toWei("1", "ether"),
      "Jumlah donasi salah"
    );
  });
});
