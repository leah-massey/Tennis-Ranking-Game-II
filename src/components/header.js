import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header  bg-peach ">
      <div>
        <NavLink
          to="/"
          className="title font-faster text-black bg-peach text-5xl py-0 px-0 flex justify-center items-center"
        >
          Tennis Ranking Game
        </NavLink>
      </div>
    </div>
  );
}
