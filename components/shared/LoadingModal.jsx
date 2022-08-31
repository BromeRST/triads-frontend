import { useContext } from "react";
import Contracts from "../../contexts/contracts";

const LoadingModal = () => {
  const { showLoading } = useContext(Contracts);

  return (
    <div
      className={`${
        showLoading ? "" : "hidden"
      } flex items-center justify-center font-pixel bg-brand-modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full`}
    >
      <div className="relative w-2/5 p-5 max-w-2xl h-full md:h-auto">
        <div className="min-h-[300px] flex flex-col items-center text-xl text-white relative bg-white">
          <div className="bg-brand-pink p-2.5 w-full">
            <div className="bg-brand-darkPurple h-16 flex items-center justify-center">
              Waiting for Txn to be minted!
            </div>
          </div>
          <div className="bg-[#AA24B5] p-2.5 pt-0 w-full">
            <div className="bg-[#CD2DF6] p-2.5 pt-0">
              <div className="bg-brand-darkPurple flex flex-col gap-4 items-center p-4 w-full py-10">
                <img src="/brand/portal.gif" className="w-56" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;
