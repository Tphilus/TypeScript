import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { ClassLink } from "./YourTeamLinks";

export default function Helper({ item }: any) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? "text-[#A6B9FD] rounded-md" : "",
        ClassLink
      )}
    >
      <span>{item.icons}</span>
      {item.label}
    </Link>
  );
}
