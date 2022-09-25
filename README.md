# Todo sample Web3 app

## Description 
This is sample todo application based on web3 tech. Currently only base functionality is cover to add task and list task


Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
```

## Installation and configuration

```
npm Install
```

To run dummy hardhat account
Also you need to configure metamask: https://asifwaquar.com/connect-metamask-to-localhost/
```
npx hardhat node
```

To compile and solidity code and get contract address
```
npx hardhat compile
npx hardhat run scripts/deploy.js --network localhost
```

### To run frontend app
```
npm run dev
```

## Whats next

- Test cases
- Add off chain storage system based on IPFS
DB: ThreadDB, orbitDB
File storage: piñata
## Built With

This section should list any major frameworks/libraries used to bootstrap your project.

- [React.js](https://reactjs.org/)
- [Hardhat](https://hardhat.org/)  Framework for providing toolkit for web3 app
- [OpenZeppelin](https://docs.openzeppelin.com/) For create solidity with ease
- [vite](https://vitejs.dev/)  Frontend development
- [either](https://docs.ethers.io/v5/)  Connecting to etherum blockchain using metamask


## Help source

https://medium.com/unitechie/build-todo-application-in-react-and-solidity-538ef2f1f54f