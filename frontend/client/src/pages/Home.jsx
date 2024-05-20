import { useWeb3Context } from "../context/useWeb3Context"

function Home() {
  const { web3State } = useWeb3Context();
  const { selectedAccount } = web3State;
  return (
    <div>
      <div>Home</div>
      <div>{selectedAccount}</div>
    </div>
  )
}

export default Home