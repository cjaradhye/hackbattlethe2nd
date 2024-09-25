import express from "express";
const nftRouter = express.Router();
import createNFT from "../config/createNFT.js";
nftRouter.post("/", async (req, res) => {
  const { tokenURI } = req.body;

  try {
    const receipt = await createNFT(tokenURI);
    res.json({
      message: "NFT minted successfully",
      transactionHash: receipt.transactionHash,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to mint NFT" });
  }
});

export default nftRouter;
