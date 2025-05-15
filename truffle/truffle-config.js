module.exports = {
  contracts_build_directory: "../client/src/contracts",

  networks: {
    development: {
      host: "127.0.0.1", // Alamat Ganache
      port: 7545, // Port Ganache
      network_id: "1337", // Network ID Ganache (cek di Ganache)
    },
  },

  compilers: {
    solc: {
      version: "0.8.18", // Versi Solidity yang kamu gunakan
    },
  },
};
