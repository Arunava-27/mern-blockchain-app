import ethers from "ethers";

async function authController(req, res, next) {
  try {
    const signature = req.body.signature;
    const address = req.query.address;

    if (!signature) {
      throw new Error("Signature is required");
    }

    const recoveredAddress = ethers.utils.verifyMessage(
      "Sign this message to prove that you own this account", // put in dotenv file
      signature
    );
    if (recoveredAddress.toLowerCase() === address.toLowerCase()) {
      res.status(200).json({ message: "Authentication successful" });
    } else {
      res.status(401).json({ message: "Authentication failed" });
    }

    console.log(recoveredAddress);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
}

export default authController;
