import { NavLink } from "react-router-dom";
import { Router } from "react-router-dom";

export default function Header() {
  return (
    <div className="header  bg-peach ">
      <div>
        <NavLink to="/" className="title  font-faster bg-peach text-10XXL">
          Tennis Ranking Game
        </NavLink>
      </div>
    </div>
  );
}
