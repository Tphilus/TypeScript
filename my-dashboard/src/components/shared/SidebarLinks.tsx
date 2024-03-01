import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { ClassLink } from "./YourTeamLinks";

export default function SidebarLinks({ item }: any) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? "text-[#A6B9FD] rounded-md" : "",
        ClassLink
      )}
    >
      <span className=""> {item.icons} </span>
      {item.label}
    </Link>
  );
}
