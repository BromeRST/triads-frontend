import { ethers } from "ethers";
import Tile from "./Tile";

const Grid = ({ gridMap, match, setXToPlay, setYToPlay, matchId }) => {
  if (match)
    return (
      <div className="text-white text-2xl p-5 flex flex-col items-center gap-5 h-full w-full">
        <div>Bet size is: {ethers.utils.formatUnits(match.betsize, 0)} DAI</div>
        <div className="bg-boardBg bg-cover w-70% h-90% py-3 px-1">
          <div className="flex flex-wrap justify-center gap-1 w-full h-gridY mt-5">
            {gridMap.map((map, y) =>
              map.map((tile, x) => (
                <Tile
                  key={x + 1}
                  x={x}
                  y={y}
                  isActive={tile.isActive}
                  tokenId={tile.tokenId}
                  winner={tile.winner}
                  match={match}
                  setXToPlay={setXToPlay}
                  setYToPlay={setYToPlay}
                  matchId={matchId}
                />
              ))
            )}
          </div>
        </div>
      </div>
    );
};

export default Grid;
