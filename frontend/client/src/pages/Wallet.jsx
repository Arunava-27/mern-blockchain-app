import { connectWallet } from "../utils/connectWallet";
import {useWeb3Context} from "../context/useWeb3Context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Wallet() {
  const {updateWeb3State, web3State} = useWeb3Context();
  const {selectedAccount} = web3State;

  const navigate = useNavigate();
  
  useEffect(() => {
    if(selectedAccount){
      navigate("/home");
    }
  }, [selectedAccount, navigate]);
  
  const handleWalletConnction = async () => {
    const { selectedAccount, contractInstance } = await connectWallet();
    updateWeb3State({selectedAccount, contractInstance})
  };
  return (
    <div>
      <div>Wallet</div>
      <button onClick={handleWalletConnction}>connect</button>
    </div>
  );
}

export default Wallet;
