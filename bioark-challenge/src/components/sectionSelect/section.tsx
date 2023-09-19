import React, { useState } from "react";
import translate from "../../assets/translate/translate.json";
import { DUMMY_SECTION, dummyData } from "./section.interface";
import { useClickOutside } from "../../hooks/useClickOutside";
export const Section = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<dummyData>(
    DUMMY_SECTION[0]
  );
  const setCenterHandler = (item: dummyData) => {
    setCurrentSection(item);
    setIsShow(false);
  };
  const domNode = useClickOutside(() => {
    setIsShow(false);
  });
  return (
    <div className="content relative" ref={domNode}>
      <button
        className="btn btn-primary w-40"
        onClick={() => setIsShow((pre) => !pre)}
      >
        {translate.NAVBAR.SECTION} : {currentSection.label}
      </button>
      <ul className={isShow ? "dropDownList" : "hidden"}>
        {DUMMY_SECTION.map((item: dummyData) => (
          <li
            className={
              item.id == currentSection.id
                ? "dropDownItem bg-gray-200"
                : "dropDownItem"
            }
            key={item.id}
            onClick={() => setCurrentSection(item)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
