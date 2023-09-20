import React, { useCallback } from "react";
import "./style.css";
import { tab } from "../../../config/tab";
import { MenuItem } from "../menuItem/MenuItem";
// tab list

//main header components
export const Header = () => {
  let depth = 0;
  const TabItems = useCallback(() => {
    return tab.map((item) => (
      <MenuItem depth={depth} items={item} key={item.id} />
    ));
  }, [tab]);
  return (
    <div className="absolute top-14 shadow-md w-full h-14 z-[1400] flex items-end lg:px-20 xl:px-48 px-2">
      <ul className="flex gap-6 text-sm">
        <TabItems />
        {/* <li className="relative">
          hgvx
          <div className="absolute w-56 p-5 h-20 bg-slate-700 top-7">hbv</div>
        </li> */}
      </ul>
    </div>
  );
};
