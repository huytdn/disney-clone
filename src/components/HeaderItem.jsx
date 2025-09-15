import React from "react";

function HeaderItem({ name, Icon, className }) {
  return (
    <div
      className={`text-white flex items-center gap-2 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 ${
        className || ""
      }`}
    >
      <Icon />
      <h2>{name}</h2>
    </div>
  );
}

export default HeaderItem;
