import Head from "next/head";
import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import Contracts from "../contexts/contracts";
import BetSizeModal from "../components/BetSizeModal";
import MatchesModal from "../components/MatchesModal";

export default function Home() {
  const {
    currentAccount,
    mainContract,
    aavegotchiContract,
    connected,
    setConnected,
    setProvider,
    setMatchId,
    playerMatchesId,
    setBetSize,
  } = useContext(Contracts);

  const [showSizes, setShowSizes] = useState(false);

  const [showMatches, setShowMatches] = useState(false);

  return (
    <div>
      <Head>
        <title>Aavegotchi Triad</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-mainBg bg-cover h-screen flex flex-col justify-between relative items-center p-16 gap-32 text-white">
        <div className="font-alagard text-8xl">Aavegotchi Triad</div>
        <div className="top-72 flex flex-col items-center justify-center gap-20 font-pixel text-3xl absolute">
          <div
            onClick={() => setShowSizes(!showSizes)}
            className="nes-pointer hover:text-brand-pink"
          >
            Create New Match
          </div>
          <div
            onClick={() => setShowMatches(!showMatches)}
            className="nes-pointer hover:text-brand-pink"
          >
            Check Your Matches
          </div>
          <div className="nes-pointer hover:text-brand-pink">
            Check Your Aavegotchis
          </div>
          <div className="nes-pointer hover:text-brand-pink">Options</div>
        </div>
        <button
          onClick={
            connected
              ? () => console.log("click")
              : () =>
                  connectWallet(setConnected, setCurrentAccount, setProvider)
          }
          className="w-1/6 capitalize font-pixel text-base text-white bg-brand-pink rounded-2xl py-4 hover:opacity-90"
        >
          {connected
            ? currentAccount.substring(0, 5) +
              ".." +
              currentAccount.substring(39)
            : "connect wallet"}
        </button>
      </div>
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
}
