import { Link } from "react-router-dom";

function HeaderItem({ name, Icon, className, to }) {
  return (
    <Link
      to={to}
      className={`text-white flex items-center gap-2 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 ${
        className || ""
      }`}
    >
      <Icon />
      <h2>{name}</h2>
    </Link>
  );
}

export default HeaderItem;
