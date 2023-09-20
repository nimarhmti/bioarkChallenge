import React from "react";
import { tabsItemModel } from "../../../config/tab";
import { Dropdown } from "./Dropdown";
import "./style.css";
interface Props {
  items: tabsItemModel;
  depth: number;
}
export const MenuItem = ({ depth, items }: Props) => {
  return (
    <li className="menuItemSection py-2">
      {items.title}
      {items.submenu && <Dropdown depth={depth} items={items.submenu} />}
    </li>
  );
};
