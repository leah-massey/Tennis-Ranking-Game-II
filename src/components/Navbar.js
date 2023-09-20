export default function Navbar() {
  return (
    <div className="fixed w-full h-[40px] flex justify-between items-center px-10 bg-green-800 text-purple-50">
      <ul className="hidden md:flex">
        <li className="px-4 tracking-wide">How To Play</li>
        <li className="px-4 tracking-wide">Restart</li>
      </ul>
    </div>
  );
}
