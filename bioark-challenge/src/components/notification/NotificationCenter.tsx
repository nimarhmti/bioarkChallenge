import { Notification } from "../../assets/icons/general/Notification";
import { notificationData, notificationModel } from "./notification.utils";
export const NotificationCenter = () => {
  return (
    <div className="content relative">
      <Notification />
      <div className="flex flex-col absolute justify-between h-96 left-1 top-full bg-slate-500 w-96 z-20 overflow-x-auto">
        <div className=" bg-red-300 w-full top-0 left-0 z-10">header</div>
        <ul className="overflow-scroll">
          <li>yt</li>
          <li>yt</li>
          <li>yt</li>
          <li>yt</li>
          <li>yt</li>
          <li>yt</li>
          <li>yt</li>
          <li>yt</li>
          <li>yt</li>
          <li>yt</li>
          <li>yt</li>
          <li>yt</li>
          <li>yt</li>
          <li>yt</li>
          <li>yt</li>
          <li>yt</li>
        </ul>
        <div className="  bottom-0 w-full bg-red-400 left-0 z-20">footer</div>
      </div>
    </div>
  );
};
