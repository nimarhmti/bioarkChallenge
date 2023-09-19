import { Notification } from "../../assets/icons/general/Notification";
import { notificationData, notificationModel } from "./notification.utils";
import translate from "../../assets/translate/translate.json";
import { useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import "./style.css";
export const NotificationCenter = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const openHandler = () => {
    setIsShow((pre) => !pre);
  };
  const domNode = useClickOutside(() => {
    setIsShow(false);
  });
  return (
    <div className="content relative" ref={domNode}>
      <span onClick={openHandler}>
        <Notification />
      </span>
      <div className={isShow ? "dropdown" : "hidden"}>
        <div className="menuHeader">
          <span>
            {translate.NOTIFICATION.NOTIFICATION}&nbsp;
            {translate.NOTIFICATION.CHANGES}
          </span>
          <span className="bg-red-500 rounded-md p-1 text-xs">
            0 {translate.NOTIFICATION.INSTANCE} {translate.NOTIFICATION.NEW}
          </span>
        </div>
        <ul className="bg-white h-full p-1 overflow-y-auto scrollbar-hide">
          {notificationData.map((item: notificationModel) => (
            <li className="subitem" key={item.id}>
              <span className="h-7 w-7 rounded-full bg-red-600 "></span>
              <div>
                <h3 className="text-lg">{item.message}</h3>
                <p className="text-sm">{item.date}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="menuFooter">
          <p className="text-sm text-slate-400 hover:text-blue-700">
            {translate.NOTIFICATION.ALL}&nbsp;
            {translate.NOTIFICATION.NOTIFICATION}
          </p>
        </div>
      </div>
    </div>
  );
};
