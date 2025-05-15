import { useEffect, useState } from "react";
import Web3 from "web3";
import DonationABI from "./Donation.json";

const CONTRACT_ADDRESS = "0x974e97745728b0E011eA16E2C6DABeD8C9183D12"; // Ganti dengan alamat kontrak yang benar

function App() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [donationAmount, setDonationAmount] = useState(""); // Jumlah donasi yang dimasukkan
  const [totalDonations, setTotalDonations] = useState("0");

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3Instance.eth.getAccounts();
        const instance = new web3Instance.eth.Contract(
          DonationABI.abi,
          CONTRACT_ADDRESS
        );

        setWeb3(web3Instance);
        setAccount(accounts[0]);
        setContract(instance);

        const total = await instance.methods.totalDonations().call();
        setTotalDonations(web3Instance.utils.fromWei(total, "ether"));
      } else {
        alert("Install MetaMask dulu ya!");
      }
    };

    init();
  }, []);

  const handleDonate = async () => {
    if (!donationAmount || isNaN(donationAmount) || donationAmount <= 0) {
      return alert("Masukkan jumlah donasi yang valid!");
    }

    // Konversi jumlah donasi yang dimasukkan ke dalam satuan wei
    const value = web3.utils.toWei(donationAmount, "ether");

    // Kirim transaksi donasi ke smart contract
    await contract.methods.donate().send({
      from: account,
      value,
    });

    // Update total donasi setelah transaksi
    const updatedTotal = await contract.methods.totalDonations().call();
    setTotalDonations(web3.utils.fromWei(updatedTotal, "ether"));

    // Reset input setelah transaksi
    setDonationAmount("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>💸 Web3 Donasi</h1>
      <p>
        <strong>Wallet:</strong> {account}
      </p>
      <p>
        <strong>Total Donasi Saat Ini:</strong> {totalDonations} ETH
      </p>

      <input
        type="number"
        value={donationAmount}
        onChange={(e) => setDonationAmount(e.target.value)}
        placeholder="Jumlah ETH"
        min="0.01" // Minimum jumlah donasi (sesuaikan jika perlu)
      />
      <button onClick={handleDonate}>Kirim Donasi</button>
    </div>
  );
}

export default App;
