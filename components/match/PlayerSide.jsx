import Card from "./Card";
import PlayerName from "./PlayerName";

const PlayerSide = ({
  player,
  playerGotchis,
  playerParams,
  setTokenId,
  points,
}) => {
  return (
    <div className="h-full w-full flex flex-col gap-6">
      <div
        className={`flex items-center gap-8 ${
          player[0] === "player1" ? "flex" : "flex-row-reverse"
        }`}
      >
        <div className={`${player[0] === "player2" ? "self-end" : ""}`}>
          <PlayerName player={player} />
        </div>
        <div className="text-3xl text-white w-16 h-11 bg-brand-pink flex items-center justify-center">
          {points}
        </div>
      </div>
      <div className="h-5/6 bg-brand-semiTran rounded border-2 border-[#31323C]">
        <div className="h-full w-full bg-cardsGrid bg-cover flex items-center gap-2">
          <div className="grid grid-cols-6 gap-2">
            {playerGotchis?.map((gotchi, i) => {
              if (i === 0)
                return (
                  <div className="col-start-3 ">
                    <Card
                      player={player}
                      gotchi={gotchi}
                      gotchiPar={playerParams[i]}
                      setTokenId={setTokenId}
                    />
                  </div>
                );
              else if (i === 1 || i === 3)
                return (
                  <div className="col-start-2 col-end-3">
                    <Card
                      player={player}
                      gotchi={gotchi}
                      gotchiPar={playerParams[i]}
                      setTokenId={setTokenId}
                    />
                  </div>
                );
              else
                return (
                  <div className="col-start-4 col-end-5">
                    <Card
                      player={player}
                      gotchi={gotchi}
                      gotchiPar={playerParams[i]}
                      setTokenId={setTokenId}
                    />
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSide;