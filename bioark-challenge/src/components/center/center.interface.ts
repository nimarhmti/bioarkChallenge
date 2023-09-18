import translate from "../../assets/translate/translate.json";
export interface dummyData {
  id: number;
  label: string;
}
export const DUMMY_HOSPITAL: dummyData[] = [
  {
    id: 0,
    label: translate.NAVBAR.SUPPORT,
  },
  {
    id: 2,
    label: translate.HOSPITAL.SHARIATI,
  },
  {
    id: 3,
    label: translate.HOSPITAL.MARKAZI,
  },
  {
    id: 4,

    label: translate.HOSPITAL.ALLAH,
  },
];
