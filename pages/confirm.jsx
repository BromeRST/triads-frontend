import Link from "next/link";

const Confirm = () => {
  return (
    <div>
      <div>ciao</div>
      <Link href="/">
        <div className="nes-pointer text-4xl p-2 border-2 border-brand-purple w-fit">
          back
        </div>
      </Link>
    </div>
  );
};

export default Confirm;
