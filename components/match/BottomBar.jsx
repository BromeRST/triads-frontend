import { useContext, useState } from "react";
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
    <div className="flex justify-between">
      <button
        onClick={contestMatch}
        className="w-1/2 capitalize text-xs text-white bg-brand-purple rounded-2xl py-4 hover:opacity-90"
      >
        contest the match
      </button>
      <button
        onClick={playCard}
        className="w-1/3 self-end capitalize text-xs text-white bg-brand-pink rounded-2xl py-4 hover:opacity-90"
      >
        play card
      </button>
    </div>
  );
};

export default BottomBar;
