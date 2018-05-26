var Web3 = require('web3');
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/oUkZ5rBQl0mB3lEHAcd7"));
  var HDWalletProvider = require("truffle-hdwallet-provider");
  var mnemonic = "tongue switch update gym round enter draw digital usual unknown cradle web"; // 12 word mnemonic
  var provider = new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/oUkZ5rBQl0mB3lEHAcd7");
  const tokenAbi = require('./InvoiceContractABI.json');
  var privateKey = new Buffer("1a05adbadb1b825974441a4f0c4758bbecb9b9c523f98494e56229af65cfd965", 'hex')
  var CryptoJS = require('crypto-js')
  web3.eth.getBalance("0x6405aB81eB3FC731BDe364372Ab6b1Ad8f7377C0", function(err,res){
			if (!err){
				console.log(res);
			} else {
				console.log(err);
			}
	})
  var tokenContract = new web3.eth.Contract(tokenAbi, "0x01B8A2016F0f906c46170BAfac6Acf98F86D4354");

  



}


async function sendInvoiceToBlockchain(  ) {
    return new Promise((resolve, reject) => {
      tokenContract.addInvoice("hello@hello.com", "hi@hi.com", "123", 'NA', 'false', (error, result) => {
        if (!error) {
          console.log(result);
          resolve(result);
        } else {
        	console.log(error);
          reject(error);
        }
      });
    });
    /*this._tokenContract.viewInvoice.call('0', (error, result) => {
      if (!error) {
        console.log(result);
      }
    });*/
  }