import { Avatar } from "../../assets/icons/avatar/avatar";
import { optionData, optionsModel, subItemModel } from "./option.utils";
import translate from "../../assets/translate/translate.json";
import "./Style.css";
import { LoginIcon } from "../../assets/icons/login/LoginIcon";
import { useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
export const Option = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const openHandler = () => {
    setIsShow((pre) => !pre);
  };
  const domNode = useClickOutside(() => {
    setIsShow(false);
  });
  return (
    <div className="content relative inline-block" ref={domNode}>
      <span onClick={openHandler}>
        <Avatar />
      </span>
      <div className={isShow ? "dropdonw" : "hidden"}>
        <ul className="w-full border-b-2">
          {optionData.map((item) => {
            const child = item.children;
            return (
              <li className="optionItem" key={item.id.toString()}>
                <span className="mr-2">{item.label}</span>
                {child && (
                  <span className="absolute left-2 text-center">+</span>
                )}

                {child && (
                  <ul className="subList">
                    {child.map((subItem) => (
                      <li className="optionItem" key={subItem.id}>
                        {subItem.label}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-col gap-y-2  w-full p-2 border-b-2">
          <li className="controllerItem">
            <div className="w-full flex items-center justify-between">
              <span>{translate.PROFILE_OPTION.COUNT}</span>
              <span>{translate.PROFILE_OPTION.IMPROVEMENT}</span>
            </div>
            <div className="progress">
              <span className="bg-green-700 w-full h-full"></span>
            </div>
          </li>
          <li className="controllerItem">
            <div className="w-full flex items-center justify-between">
              <span>{translate.PROFILE_OPTION.STORAGE}</span>
              <span>2.9G</span>
            </div>
            <div className="progress">
              <span className="bg-green-700 w-5/6 h-full"></span>
            </div>
          </li>
        </ul>
        <div className="w-full hover:bg-slate-200 p-4 flex gap-x-2 items-center">
          <LoginIcon />
          <span>{translate.PROFILE_OPTION.LOGOUT}</span>
        </div>
      </div>
    </div>
  );
};
