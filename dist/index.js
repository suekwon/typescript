"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CJs = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calcBlockHash = (index, previousHash, timestamp, data) => CJs.SHA256(index + previousHash + timestamp + data).toString();
Block.validateStructure = (aBlock) => typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";
;
const genesisBlock = new Block(0, "202020202", "", "Hello", 123455);
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLastBlock = () => blockchain[blockchain.length - 1];
const getNewTimestamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLastBlock();
    const newIndex = previousBlock.index + 1;
    const newTimestamp = getNewTimestamp();
    const newHash = Block.calcBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    addBlock(newBlock);
    return newBlock;
};
const getHashforBlock = (aBlock) => Block.calcBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);
const isBlockValid = (candidateBlock, previousBlock) => {
    if (!Block.validateStructure(candidateBlock)) {
        return false;
    }
    else if (previousBlock.index + 1 !== candidateBlock.index) {
        return false;
    }
    else if (previousBlock.hash !== candidateBlock.previousHash) {
        return false;
    }
    else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    }
    else {
        return true;
    }
};
const addBlock = (candidateBlock) => {
    if (isBlockValid(candidateBlock, getLastBlock())) {
        blockchain.push(candidateBlock);
    }
};
createNewBlock("second block");
createNewBlock("third block");
// console.log(blockchain.length);
// console.log(createNewBlock("hello"), createNewBlock("bye bye"));
// console.log(createNewBlock("bye bye"));
console.log(blockchain);
// #5
// class Block {
//     public index: number;
//     public hash: string;
//     public previousHash: string;
//     public data: string;
//     public timestamp: number;
//     constructor(
//         index: number,
//         hash: string,
//         previousHash: string,
//         data: string,
//         timestamp: number
//     ) {
//         this.index = index;
//         this.hash = hash;
//         this.previousHash = previousHash;
//         this.data = data;
//         this.timestamp = timestamp;
//     }
// }
// const genesisBlock: Block = new Block(0, "202020202", "", "Hello", 123455);
// let blockchain: [Block] = [genesisBlock];
// console.log(blockchain);
// blockchain.push(genesisBlock);
// console.log(blockchain);
// export { };
//# sourceMappingURL=index.js.map