import { ethers } from "ethers";
import Contracts from "../../contexts/contracts";
import { useContext, useEffect, useState } from "react";
import { checkGotchiParam } from "../../lib/functions";

const Tile = ({
  x,
  y,
  isActive,
  tokenId,
  winner,
  match,
  setXToPlay,
  setYToPlay,
  matchId,
}) => {
  const { aavegotchiContract } = useContext(Contracts);
  const [params, setParams] = useState(null);
  const [url, setUrl] = useState(null);

  const bgN = y.toString() + x.toString();

  const handleTileClick = () => {
    setXToPlay(x);
    setYToPlay(y);
  };

  useEffect(() => {
    if (isActive) {
      const setPar = async () => {
        const par = await checkGotchiParam(tokenId, aavegotchiContract);
        setParams(par);
      };

      setPar();

      const checkSvg = async () => {
        let gotchiSvg = await aavegotchiContract.getAavegotchiSvg(
          parseInt(ethers.utils.formatUnits(tokenId, 0))
        );
        let blob = new Blob([gotchiSvg], { type: "image/svg+xml" });
        let url = URL.createObjectURL(blob);
        setUrl(url);
      };

      checkSvg();
    }
    if (!isActive) {
      setParams(null);
      setUrl(null);
    }
  }, [isActive]);

  const card = () => {
    return (
      <div className="flex flex-col items-center text-base">
        <img src={url} className={"w-3/4 mt-6"} />
        <div className="mt-3 w-full flex flex-col">
          <div className="self-center">{params[0]}</div>
          <div className="flex justify-around">
            <div>{params[3]}</div>
            <div>{params[1]}</div>
          </div>
          <div className="self-center">{params[2]}</div>
        </div>
      </div>
    );
  };

  return (
    <div
      onClick={handleTileClick}
      style={
        isActive && match !== null && winner == match.player2
          ? {
              backgroundImage: "url('/brand/CARDS/BASE_CARD_FUCSIA.png')",
            }
          : isActive && match !== null && winner == match.player1
          ? { backgroundImage: "url('/brand/CARDS/BASE_CARD_PURPLE.png')" }
          : {
              backgroundImage: "url('/brand/BOARD/BASE_BOARD_" + bgN + ".png')",
            }
      }
      className={`bg-cover w-30% h-32% nes-pointer`}
    >
      {params && card()}
    </div>
  );
};

export default Tile;
