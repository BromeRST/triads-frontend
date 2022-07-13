import Card from "./match/Card";

const OwnedGotchiModal = ({
  playerGotchis,
  playerParams,
  showOwned,
  setShowOwned,
  setTokenIds,
}) => {
  const click = () => {
    setShowOwned(!showOwned);
  };

  return (
    <div
      onClick={click}
      className={`${
        showOwned ? "" : "hidden"
      } flex items-center justify-center font-pixel bg-brand-modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full`}
    >
      <div className="relative p-5 max-w-2xl h-full md:h-auto">
        <div className="bg-brand-semiTran rounded border-2 border-[#31323C]">
          <div className="h-full w-full p-6 bg-cardsGrid bg-cover flex items-center">
            <div className="grid grid-cols-3 gap-4">
              {playerGotchis?.map((gotchi, i) => (
                <Card
                  key={i}
                  player={["owner"]}
                  gotchi={gotchi}
                  gotchiPar={playerParams[i]}
                  setTokenId={setTokenIds}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnedGotchiModal;
