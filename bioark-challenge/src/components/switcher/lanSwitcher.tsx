import { useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import "./style.css";
import { lanList, lanModel } from "./lanSwitcher.utils";
const useFilterLan = (id: number) => {
  return lanList.filter((ele) => ele.id !== id);
};
export const LanSwitcher = () => {
  const [currentLan, setCurrentLan] = useState<lanModel>(lanList[0]);
  const [isShow, setIsShow] = useState<boolean>(false);
  const openHandler = () => {
    setIsShow((pre) => !pre);
  };
  const domNode = useClickOutside(() => {
    setIsShow(false);
  });
  return (
    <div
      className="content relative w-6 text-center"
      ref={domNode}
      onClick={openHandler}
    >
      <p>{currentLan.lan}</p>
      <ul className={isShow ? "dropdown" : "hidden"}>
        {useFilterLan(currentLan.id).map((item) => (
          <li
            key={item.id}
            className="lanDropdownItem"
            onClick={() => setCurrentLan(item)}
          >
            <span>{item.lan}</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
