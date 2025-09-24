import React from "react";
import PersonList from "./PersonList";

function PersonListTitle({ title }) {
  return (
    <div className="p-1 md:p-4 px-10 md:px-20">
      <h2 className="text-[20px]  md:text-[30px] text-white font-bold">
        {title}
      </h2>
      <PersonList itemsPerPage={3} />
    </div>
  );
}

export default PersonListTitle;
