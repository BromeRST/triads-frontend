const Card = ({ player, gotchi, gotchiPar, setTokenId }) => {
  let blob = new Blob([gotchi.svg], { type: "image/svg+xml" });
  let url = URL.createObjectURL(blob);

  const click = () => {
    if (player[0] === "owner") {
      setTokenId((prevTokeId) => [...prevTokeId, gotchi.tokenId]);
    } else {
      setTokenId(gotchi.tokenId);
    }
  };

  return (
    <div
      onClick={click}
      className={`${
        player[0] === "player1"
          ? "bg-purpleCard"
          : player[0] === "owner"
          ? "bg-waterCard"
          : "bg-fucsiaCard"
      } bg-cover w-40 h-56 text-sm text-white nes-pointer flex flex-col items-center hover:opacity-90`}
    >
      <img src={url} className={"w-3/4 mt-6"} />
      <div className="mt-3 w-full flex flex-col">
        <div className="self-center">{gotchiPar[0]}</div>
        <div className="flex justify-around">
          <div>{gotchiPar[3]}</div>
          <div>{gotchiPar[1]}</div>
        </div>
        <div className="self-center">{gotchiPar[2]}</div>
      </div>
    </div>
  );
};

export default Card;
