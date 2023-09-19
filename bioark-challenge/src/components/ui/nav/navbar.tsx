import { LoginIcon } from "../../../assets/icons/login/LoginIcon";
import { Center } from "../../center/center";
import { Section } from "../../sectionSelect/section";
import translate from "../../../assets/translate/translate.json";
import { LanSwitcher } from "../../switcher/lanSwitcher";
import { NotificationCenter } from "../../notification/NotificationCenter";
import { Option } from "../../profile/Option";

export const Navbar = () => {
  return (
    <nav className="nav flex items-center justify-between">
      <div className="flex gap-x-2 items-center h-full">
        <a href="#" className="text-2xl text-white font-medium">
          bioArc
        </a>
        <div className="content">
          <LoginIcon />
        </div>
      </div>
      <div className="flex gap-x-2 items-center h-full">
        <div className="content ">
          <button className="btn btn-success text-white ">
            {translate.NAVBAR.OWNER}
          </button>
        </div>
        <Section />
        <Center />
        <LanSwitcher />
        <NotificationCenter />
        <Option />
      </div>
    </nav>
  );
};
