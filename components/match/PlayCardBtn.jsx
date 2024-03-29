import { useContext, useEffect } from "react";
import Contracts from "../../contexts/contracts";

const PlayCardBtn = ({ x, y }) => {
  const { mainContract, matchId, tokenId, setShowLoading } =
    useContext(Contracts);

  const playCard = async () => {
    const tx = await mainContract.playCard(tokenId, matchId, x, y);
    setShowLoading(true);
    const recipt = await tx.wait();

    if (Number(recipt.status) === 1) {
      setShowLoading(false);
    }
  };

  return (
    <div className="p-1.5 bg-pink-900 rounded">
      <button
        onClick={playCard}
        className="text-white h-full 2xl:px-4 py-2 text-sm text-center flex items-center justify-center nes-pointer hover:opacity-80 bg-brand-pink"
      >
        play card
      </button>
    </div>
  );
};

export default PlayCardBtn;
