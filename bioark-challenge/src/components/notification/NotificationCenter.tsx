import { Notification } from "../../assets/icons/general/Notification";
import { notificationData, notificationModel } from "./notification.utils";
import translate from "../../assets/translate/translate.json";
export const NotificationCenter = () => {
  return (
    <div className="content relative">
      <Notification />
      <div className="flex flex-col absolute justify-between h-96 left-1 top-full w-96 z-20 hidden ">
        <div className="bg-slate-100 w-full top-0 left-0 z-10 h-16 p-3 flex items-center justify-between text-sm border-b-2 cursor-auto">
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
            <li
              className=" w-full flex border-b-2 items-center gap-x-3 p-3 hover:bg-gray-300 rounded-sm"
              key={item.id}
            >
              <span className="h-7 w-7 rounded-full bg-red-600 "></span>
              <div>
                <h3 className="text-lg">{item.message}</h3>
                <p className="text-sm">{item.date}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="bg-slate-100 bottom-0 w-full  left-0 z-20 h-16  flex items-center justify-center  border-t-2 hover:text-blue-700">
          <p className="text-sm text-slate-400 hover:text-blue-700">
            {translate.NOTIFICATION.ALL}&nbsp;
            {translate.NOTIFICATION.NOTIFICATION}
          </p>
        </div>
      </div>
    </div>
  );
};
