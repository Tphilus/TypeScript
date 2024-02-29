import { Link } from "react-router-dom";
import { ClassLink } from "./YourTeamLinks";

export default function Helper({ item }: any) {
  return (
    <Link to={item.path} className={ClassLink}>
      <span>{item.icons}</span>
      {item.label}
    </Link>
  );
}
