import { ethers } from "ethers";
import contractAbi from "../constants/contractAbi.json";
import toast from "react-hot-toast";
import axios from "axios";

export const connectWallet = async () => {
  try {
    if (!window.ethereum) {
      throw new Error("Metamask is not installed");
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const selectedAccount = accounts[0];
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const message = "Sign this message to prove that you own this account";
    const signature = await signer.signMessage(message);
    console.log(signature);

    const dataSinature = {
        signature
    }

    const res = await axios.post("http://localhost:5000/auth", dataSinature);
    
    const contactAddress = "0xB2B3c06C7b4D68b34A39FF8015B1F7517296dadF";
    const contractInstance = new ethers.Contract(
      contactAddress,
      contractAbi,
      signer
    );
    toast.success("Wallet connected successfully");

    return { selectedAccount, contractInstance };
  } catch (error) {
    toast.error(error.message);
    console.log(error);
  }
};
