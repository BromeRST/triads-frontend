const BetSizeModal = ({ setBetSize, showSizes, setShowSizes }) => {
  const betSizes = [1, 5, 10, 25, 50, 100, 200, 500];
  const click = (bet) => {
    setBetSize(bet);
    setShowSizes(!showSizes);
  };

  return (
    <div
      onClick={() => setShowSizes(!showSizes)}
      className={`${
        showSizes ? "" : "hidden"
      } flex items-center justify-center font-pixel bg-brand-modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full`}
    >
      <div className="relative w-1/4 p-5 max-w-2xl h-full md:h-auto">
        <div className="p-5 min-h-[300px] flex flex-col items-center gap-4 text-2xl relative bg-white rounded-lg shadow dark:bg-gray-700">
          {betSizes.map((bet, i) => (
            <div
              key={i}
              className="nes-pointer hover:text-brand-pink"
              onClick={() => click(bet)}
            >
              {bet} DAI
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BetSizeModal;
