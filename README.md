# Dappcord

## Technology Stack & Tools

- Solidity (Writing Smart Contracts & Tests)
- Javascript (React & Testing)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [React.js](https://reactjs.org/) (Frontend Framework)
- [Socket.io](https://socket.io/) (Client & Server communication)

## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
`$ npm install`

### 3. Run tests
`$ npx hardhat test`

### 4. Start Hardhat node
`$ npx hardhat node`

### 5. Run deployment script
In a separate terminal execute:
`$ npx hardhat run ./scripts/deploy.js --network localhost`

### 6. Start Socket.io server
`$ node server.js`

### 7. Start frontend
In a separate terminal execute:
`$ npm run start`

## Description
Our Discord clone is built on the Polygon testnet, using the programming language Solidity and development environment Hardhat. We use Socket.io and Node.js for the backend, ensuring a seamless user experience. By utilizing the Polygon network, we are able to offer fast and affordable transactions for purchasing NFTs and other features within the platform.

Memberships on our platform are represented as NFTs. These NFTs can be purchased using cryptocurrency, and provide access to exclusive features and channels within the platform. For example, a user could purchase an NFT membership that gives them access to a private channel or exclusive content.

Overall, our blockchain-based Discord clone is revolutionizing the way we think about social media platforms. By using NFTs for memberships and leveraging the security and transparency of blockchain technology, we are providing a more engaging, trustworthy, and rewarding social media experience.
