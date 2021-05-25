require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note payment come hunt help equal genuine'; 
let testAccounts = [
"0x35b64a4827e486d1ea5c21af965c9d2d6f28cee801aa3c662b4ae8dbe2571000",
"0xb879b0230908ad645569c5935392796ac44c7c7fd99001ac13a5210e6d035e61",
"0xd013563d14961029491abcc5af79ffdb507195407888092b721bba5a48b048dc",
"0x2c935097d31d0a0a2ecfbccadd4ceef7ddd6b0948c2e157e06f997fd6d48c1dc",
"0x1480a49d1258b584124fef9101eb0902f11d38a819c6c0a11aa90d87d2f3a21d",
"0x50b1bbc0ecbef59e5268b40dda5cf4831b36f8baaa5c8b9d87edccef23fbbc05",
"0x843621fe4921cf8d2406fe35beecb2ad991f18baee2d6b89f02f805157933eb5",
"0x1739b28490e6ecb04b4694d3ecd7f91e326f7ee865466bfb5d2d6381110fb9ec",
"0x1d9b3a2d9487b92d6a3942cd755339fdbdf07c3d1a154847e926cee259ec4414",
"0x40190bee37e91b0e9c3fa56ba8bba4341b97c037396e777478d563410b15f5f2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
