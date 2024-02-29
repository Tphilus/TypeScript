import { Link } from "react-router-dom";
import { ClassLink } from "./YourTeamLinks";

export default function SidebarLinks({ item }: any) {
  return (
    <Link to={item.path} className={ClassLink}>
      <span className=""> {item.icons} </span>
      {item.label}
    </Link>
  );
}
