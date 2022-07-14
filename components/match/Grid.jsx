import { ethers } from "ethers";
import Tile from "./Tile";

const Grid = ({ gridMap, match, setXToPlay, setYToPlay, matchId }) => {
  if (match)
    return (
      <div className="text-white 2xl:text-2xl p-5 flex flex-col items-center gap-5 h-full w-full">
        <div>Bet size is: {ethers.utils.formatUnits(match.betsize, 0)} DAI</div>
        <div className="w-5/6 bg-yellow-200 2xl:p-1">
          <div className="bg-[#51441E] 2xl:p-1">
            <div className="p-2 bg-yellow-200 2xl:p-2.5">
              <div className="p-1 bg-[#51441E] 2xl:p-1.5">
                <div className="grid grid-cols-3 grid-rows-3 gap-0.5 2xl:gap-1 w-full">
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
          </div>
        </div>
      </div>
    );
};

export default Grid;
