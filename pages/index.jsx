import Head from "next/head";
import { ethers } from "ethers";
import { useContext, useEffect, useState, useRef } from "react";
import Contracts from "../contexts/contracts";
import BetSizeModal from "../components/BetSizeModal";
import MatchesModal from "../components/MatchesModal";
import { connectWallet } from "../lib/functions";
import { DIAMOND_FORKED_MAINNET_CONTRACT } from "../lib/constants";
import SwapModal from "../components/SwapModal";

const Home = () => {
  const {
    currentAccount,
    daiContract,
    connected,
    setConnected,
    setProvider,
    setMatchId,
    playerMatchesId,
    setCurrentAccount,
    setConfirmedBet,
  } = useContext(Contracts);

  const audioRef = useRef();

  const [showSizes, setShowSizes] = useState(false);
  const [showMatches, setShowMatches] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [showSwap, setShowSwap] = useState(false);

  const audio = "/brand/audio/landing.wav";

  const approve = async () => {
    await daiContract.approve(
      DIAMOND_FORKED_MAINNET_CONTRACT,
      ethers.utils.parseUnits("100000000000000000000000000", "ether")
    );
  };

  useEffect(() => {
    playing ? audioRef.current.play() : audioRef.current.pause();
  }, [playing]);

  return (
    <div>
      <Head>
        <title>Aavegotchi Triad</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-mainBg bg-cover h-screen flex flex-col justify-around items-center text-white">
        <div className="font-alagard text-8xl h-1/6">Aavegotchi Triad</div>
        <div className="flex flex-col items-center justify-between h-1/3 gap-10 font-pixel text-3xl">
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
          <div className="nes-pointer hover:text-brand-pink">Rules</div>
          <div
            onClick={() => setShowSwap(true)}
            className="nes-pointer hover:text-brand-pink"
          >
            Swap
          </div>
          <div className="nes-pointer hover:text-brand-pink">Options</div>
        </div>
        <div className="w-full h-1/6 flex items-center justify-around">
          <div className="p-1.5 bg-[#47288B] rounded">
            <button
              onClick={
                connected
                  ? () => approve()
                  : () =>
                      connectWallet(
                        setConnected,
                        setCurrentAccount,
                        setProvider
                      )
              }
              className="capitalize font-pixel text-base text-white bg-[#722CF0] py-4 px-6 hover:opacity-90"
            >
              {connected
                ? currentAccount.substring(0, 5) +
                  ".." +
                  currentAccount.substring(39)
                : "connect wallet"}
            </button>
          </div>
          <div>
            <audio
              controls="controls"
              preload="auto"
              autobuffer="true"
              style={{ display: "none" }}
              ref={audioRef}
              loop={true}
            >
              <source src={audio} />
            </audio>

            <button onClick={() => setPlaying(!playing)}>Play</button>
          </div>
        </div>
      </div>
      <BetSizeModal
        showSizes={showSizes}
        setConfirmedBet={setConfirmedBet}
        setShowSizes={setShowSizes}
      />
      <MatchesModal
        setMatchId={setMatchId}
        showMatches={showMatches}
        setShowMatches={setShowMatches}
        playerMatchesId={playerMatchesId}
      />
      <SwapModal showModal={showSwap} setShowModal={setShowSwap} />
    </div>
  );
};

export default Home;
