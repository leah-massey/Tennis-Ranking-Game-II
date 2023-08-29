import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-10 bg-green-800 text-purple-50">
      <div>
        <h1 className="font-bold tracking-widest text-xl">
          Tennis Ranking Game
        </h1>
      </div>
      <ul className="hidden md:flex">
        <li className="px-4 tracking-wide">How To Play</li>
        <li className="px-4 tracking-wide">Restart</li>
      </ul>
    </div>
  );
};

export default Navbar;
