import React, { useState } from "react";
import translate from "../../assets/translate/translate.json";
import { DUMMY_SECTION, dummyData } from "./section.interface";
export const Section = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [currentCenter, setCurrentCenter] = useState<dummyData>(
    DUMMY_SECTION[0]
  );
  const setCenterHandler = (item: dummyData) => {
    setCurrentCenter(item);
    setIsShow(false);
  };
  return (
    <div className="content relative">
      <button
        className="btn btn-primary"
        onClick={() => setIsShow((pre) => !pre)}
      >
        {translate.NAVBAR.CENTER} :{" "}
        {currentCenter.label.substring(0, 9) + " ..."}
      </button>
      <ul className={isShow ? "dropDownList" : "hidden"}>
        {DUMMY_SECTION.map((item: dummyData) => (
          <li
            className={
              item.id == currentCenter.id
                ? "dropDownItem bg-gray-200"
                : "dropDownItem"
            }
            key={item.id}
            onClick={() => setCenterHandler(item)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
