import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

export const ClassLink =
  "text-[#3A4551] flex items-center gap-2 px-3 py-3 text-xl hover:bg-[#A6B9FD] hover:rounded-md active:bg-[#A6B9FD] hover:text-white ";

export default function YourTeamLinks({ item }: any) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? "text-[#A6B9FD] rounded-md" : "",
        ClassLink
      )}
    >
      <span> {item.icons} </span>
      {item.label}
    </Link>
  );
}
