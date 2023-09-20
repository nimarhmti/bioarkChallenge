import React, { MouseEvent, useState } from "react";
import { tabsItemModel } from "../../../config/tab";
import { Dropdown } from "./Dropdown";
import "./style.css";
interface Props {
  items: tabsItemModel;
  id: string;
  depth: number;
}
export const MenuItem = ({ depth, items, id }: Props) => {
  const [itemHoverd, setItemHovered] = useState<string>("");
  const mouseHoverHandler = (e: MouseEvent<HTMLLIElement>) => {
    const { id } = e.currentTarget;
    setItemHovered(id);
  };
  return (
    <li
      className="menuItemSection p-3"
      id={id}
      onMouseEnter={mouseHoverHandler}
      onMouseLeave={() => setItemHovered("")}
    >
      {items.title}
      {depth > 0 && items.submenu ? (
        <span className="absolute left-0">+</span>
      ) : null}
      {items.submenu && (
        <Dropdown
          depth={depth}
          items={items.submenu}
          itemHovered={itemHoverd}
          id={items.id}
        />
      )}
    </li>
  );
};
