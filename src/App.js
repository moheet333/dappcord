import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { io } from "socket.io-client";

// Components
import Navigation from "./components/Navigation";
import Servers from "./components/Servers";
import Channels from "./components/Channels";
import Messages from "./components/Messages";

// ABIs
import Dappcord from "./abis/Dappcord.json";

// Config
import config from "./config.json";

// Socket
const socket = io("ws://localhost:3030");

function App() {
  const [account, setAccount] = useState(null);

  const loadBlockchainData = async () => {
    window.ethereum.on("accountsChanged", async () => {
      window.location.reload();
    });
  };

  useEffect(() => {
    loadBlockchainData();
  });
  return (
    <div>
      <Navigation account={account} setAccount={setAccount} />
      <main>
        <Servers />
        <Channels />
        <Messages />
      </main>
    </div>
  );
}

export default App;
