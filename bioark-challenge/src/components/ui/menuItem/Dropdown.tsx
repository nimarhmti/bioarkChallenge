import React from "react";
import { tabsItemModel } from "../../../config/tab";
import "./style.css";
import { MenuItem } from "./MenuItem";
interface Props {
  items?: tabsItemModel[];
  depth: number;
}
export const Dropdown = ({ depth, items }: Props) => {
  const dropDonwClass = depth > 0 ? "headerDropSide" : "headerDropdown";
  depth = depth + 1;
  return (
    <div className={dropDonwClass}>
      {items?.map((item) => (
        <MenuItem items={item} depth={10} />
      ))}
    </div>
  );
};
