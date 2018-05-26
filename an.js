const Web3 = require('web3');

const HDWalletProvider = require('truffle-hdwallet-provider');
const campaign = require('./ContractABI.json');
const provider = new HDWalletProvider(
  '12 word mneumonic',
  'https://rinkeby.infura.io/<auth id>',
);
const web3 = new Web3(provider);
var tokenContract = new web3.eth.Contract(campaign, "contract address");
(async function(){
	const accounts = await web3.eth.getAccounts();
	const result = await tokenContract.methods.addInvoice("hello@hello.com", "hi@hi.com", "123", 'NA', 'false').send({
    	from: 'public address'
    });
    console.log(result);
  })();