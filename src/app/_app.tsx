import { defineChain, getContract } from "thirdweb";

// Define the Alfajores testnet
const alfajores = defineChain(44787);

// Get contract instance with the defined chain
const contract = getContract({
  client,
  chain: alfajores,  // Pass the chain here
  address: "0x3eD5D4A503999C5aEB13CD71Eb1d395043368723",
});
