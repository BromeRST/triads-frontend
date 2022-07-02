import Link from "next/link";

const MatchesModal = ({
  setMatchId,
  showMatches,
  setShowMatches,
  playerMatchesId,
}) => {
  const click = (id) => {
    setMatchId(id);
    setShowMatches(!showMatches);
  };

  return (
    <div
      onClick={() => setShowMatches(!showMatches)}
      className={`${
        showMatches ? "" : "hidden"
      } flex items-center justify-center bg-brand-modal font-pixel overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full`}
    >
      <div className="relative w-1/5 max-w-2xl h-full md:h-auto">
        <div className="p-5 min-h-[300px] flex flex-col items-center justify-center text-2xl relative bg-white rounded-lg border-4 border-brand-pink shadow dark:bg-gray-700">
          {playerMatchesId?.map((match, i) => (
            <Link key={i} href={"/match/" + match} passHref>
              <div
                className="nes-pointer hover:text-brand-pink"
                onClick={() => click(match)}
              >
                {match}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchesModal;
