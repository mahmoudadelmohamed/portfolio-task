import React from "react";
import { FaDotCircle } from "react-icons/fa";
import "./ToolsList.scss";
const ToolsList = ({ list, title, className }) => {
  const listTools = list.map(items => {
    return (
      <li
        key={items.id}
        value={items.tool}
        className="title_uppercase small-bold inline-item mr-3 mt-2"
      >
        <FaDotCircle className="dot_icon mr-1" />
        {items.tool}
      </li>
    );
  });
  return (
    <div className={className}>
      <h2 className="title_uppercase title_mt h2-light ">{title}</h2>
      <ul className="list-unstyled d-flex inline-list">{listTools}</ul>
    </div>
  );
};
export default ToolsList;
