require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace indoor sure security trap cruise ridge toss hunt derive system typical'; 
let testAccounts = [
"0xce2bfaa710eec78b51095b4208e3df7f07474e45d7a129eaa5815001923445ca",
"0xa472382eef0ce094ff6ed64636358f65058def27622a516dcb0d12364d254e8a",
"0x887f77f4a84ed268bfa2e426144d0c86f61e9532227f3c4b397c0eaa29abd760",
"0xddde9e1ec258af7d3541f2b6ae91bfe5971babedcb57ee8769e22c17d68aebe8",
"0xb58135dec2c8ec1318aab2e71e15ab2f4b80d383bea69ffe49c60fa5d9fb3566",
"0x618c56354faab88eb1180b0c63c6d13901db6b592e5ab0295cb5bfe40b18c9fb",
"0x213156314c43bfce2cb827ced95d605956cbf078821cef3c1899b15e68ccff6b",
"0x545ad6c897fc5a18826f473e1b6504fe26f659605c645c523f64e184a75e693b",
"0xa806f3b9f32e91f29db27b59e602ad81f269c4a3b28c46056da5e0a735caa245",
"0x344e0e07dd63089bdf720ac6a82c06e234acd370b7909f2b501fe465b777be59"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
