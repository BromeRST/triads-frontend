import { register } from "../../lib/functions";
import BetSizeModal from "../BetSizeModal";
import { useContext, useState } from "react";
import Contracts from "../../contexts/contracts";
import { ethers } from "ethers";
import { DIAMOND_FORKED_MAINNET_CONTRACT } from "../../lib/constants";
import { connectWallet } from "../../lib/functions";
import MatchesModal from "../MatchesModal";

const BottomBar = ({ setMatchId, matchId, tokenId, xToPlay, yToPlay }) => {
  const {
    currentAccount,
    connected,
    mainContract,
    daiContract,
    playerMatchesId,
    setConnected,
    setCurrentAccount,
    setProvider,
  } = useContext(Contracts);
  const [showSizes, setShowSizes] = useState(false);
  const [betSize, setBetSize] = useState(null);
  const [showMatches, setShowMatches] = useState(false);

  const approve = async () => {
    await daiContract.approve(
      DIAMOND_FORKED_MAINNET_CONTRACT,
      ethers.utils.parseUnits("100000000000000000000000000", "ether")
    );
  };

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
        onClick={() => register(mainContract, currentAccount, betSize)}
        className="w-1/3 capitalize text-xs text-white bg-brand-purple rounded-2xl py-4 hover:opacity-90"
      >
        register
      </button>
      <button
        onClick={() => setShowSizes(!showSizes)}
        className="w-1/3 self-end capitalize text-xs text-white bg-brand-pink rounded-2xl py-4 hover:opacity-90"
      >
        bet size
      </button>
      <button
        onClick={() => setShowMatches(!showMatches)}
        className="w-1/2 self-end capitalize text-xs text-white bg-brand-pink rounded-2xl py-4 hover:opacity-90"
      >
        check matches
      </button>
      <button
        onClick={approve}
        className="w-1/3 self-end capitalize text-xs text-white bg-brand-pink rounded-2xl py-4 hover:opacity-90"
      >
        approve
      </button>
      <button
        onClick={playCard}
        className="w-1/3 self-end capitalize text-xs text-white bg-brand-pink rounded-2xl py-4 hover:opacity-90"
      >
        play card
      </button>
      <button
        onClick={
          connected
            ? () => console.log("click")
            : () => connectWallet(setConnected, setCurrentAccount, setProvider)
        }
        className="w-1/3 self-end capitalize text-xs text-white bg-brand-pink rounded-2xl py-4 hover:opacity-90"
      >
        {connected
          ? currentAccount.substring(0, 5) + ".." + currentAccount.substring(39)
          : "connect wallet"}
      </button>
      <BetSizeModal
        setBetSize={setBetSize}
        showSizes={showSizes}
        setShowSizes={setShowSizes}
      />
      <MatchesModal
        setMatchId={setMatchId}
        showMatches={showMatches}
        setShowMatches={setShowMatches}
        playerMatchesId={playerMatchesId}
      />
    </div>
  );
};

export default BottomBar;
