import { useState } from "react";

interface lanModel {
  id: number;
  lan: string;
  name: string;
}
const lanList: lanModel[] = [
  { id: 0, lan: "Fa", name: "Farsi" },
  { id: 1, lan: "En", name: "English" },
];
const useFilterLan = (id: number) => {
  return lanList.filter((ele) => ele.id !== id);
};
export const LanSwitcher = () => {
  const [currentLan, setCurrentLan] = useState<lanModel>(lanList[0]);

  return (
    <div className="content relative w-6 text-center">
      <p>{currentLan.lan}</p>
      <ul className="w-36 text-lg bg-white absolute top-12 left-1 p-1 z-10 rounded-sm hidden">
        {useFilterLan(currentLan.id).map((item) => (
          <li
            key={item.id}
            className="dropDownItem flex items-center justify-between mt-1"
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
