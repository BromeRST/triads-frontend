import { useContext } from "react";
import Contracts from "../../contexts/contracts";

const BottomBar = ({ matchId, tokenId, xToPlay, yToPlay }) => {
  const { mainContract } = useContext(Contracts);

  const contestMatch = async () => {
    await mainContract.contestMatch(matchId);
  };

  const playCard = async () => {
    await mainContract.playCard(tokenId, matchId, xToPlay, yToPlay);
  };

  return (
    <div className="flex justify-between bg-mainBg px-10 py-3">
      <div className="p-1.5 bg-purple-800 rounded">
        <div
          onClick={contestMatch}
          className="text-white w-56 px-8 py-2 text-base text-center flex items-center justify-center nes-pointer hover:opacity-80 bg-brand-purple"
        >
          contest the match
        </div>
      </div>
      <div className="p-1.5 bg-pink-900 rounded">
        <button
          onClick={playCard}
          className="text-white w-56 h-full px-8 py-2 text-base text-center flex items-center justify-center nes-pointer hover:opacity-80 bg-brand-pink"
        >
          play card
        </button>
      </div>
    </div>
  );
};

export default BottomBar;
