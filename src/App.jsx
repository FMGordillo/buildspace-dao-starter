import { useAddress, useMetamask } from "@thirdweb-dev/react";

const App = () => {
  const address = useAddress();
  const connectToMetamask = useMetamask();

  return (
    <div className="landing">
      {!address ? (
        <>
          <h1>Welcome to My DAO</h1>
          <button onClick={connectToMetamask} className="btn-hero">
            Connect to Metamask
          </button>
        </>
      ) : (
        <>
          <h1>👀 wallet connected, now what!</h1>
          <p>{address}</p>
        </>
      )}
    </div>
  );
};

export default App;
