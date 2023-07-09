import { Link } from "react-router-dom";
import React from "react";
import { DataMenu } from "./Data";

export default function Menu() {
  return (
    <ul className="hidden md:flex items-center gap-8 text-sm text-black ml-4">
      {DataMenu.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <li className="cursor-pointer font-semibold">
              <Link to={item.link}>{item.name}</Link>
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  );
}
