import React, { useState } from "react";
import { tabsItemModel } from "../../../config/tab";
import "./style.css";
import { MenuItem } from "./MenuItem";
interface Props {
  items?: tabsItemModel[];
  depth: number;
  itemHovered: string;
  id: string;
}

export const Dropdown = ({ depth, items, itemHovered, id }: Props) => {
  const dropDonwClass =
    depth > 0 ? "mainStyle headerDropSide" : "mainStyle headerDropdown";
  const isHovered = itemHovered == id;
  depth = depth + 1;
  return (
    <div className={`${dropDonwClass} ${isHovered ? "block" : null}`}>
      {items?.map((item) => (
        <MenuItem items={item} depth={10} key={item.id} id={item.id} />
      ))}
    </div>
  );
};
