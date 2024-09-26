import express from "express";
const addHash = express.Router();

addHash.post("/", async (req, res) => {
  try {
    // Assume 'hash' is sent in the request body, e.g., { hash: 'abc123' }
    const { hash } = req.body;

    // Update the URI with the hash.
    // Assuming you're adding it to the end of a base URI:
    const baseUri ="https://raw.githubusercontent.com/cjaradhye/hackbattlethe2nd/refs/heads/main/server/src/Uri.json";
    const updatedUri = `${baseUri}${hash}`; // Append the hash to the base URI

    // Call your blockchain function here to store the updated URI
    // storeInBlockchain(updatedUri); // Example blockchain call

    res.status(200).json({ message: "Hash added to blockchain", updatedUri });
  } catch (err) {
    console.error("Error adding hash to blockchain: ", err);
    res.status(500).send("Error during hash addition");
  }
});

export default addHash;
