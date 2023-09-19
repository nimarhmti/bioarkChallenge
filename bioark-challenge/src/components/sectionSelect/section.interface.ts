import translate from "../../assets/translate/translate.json";
export interface dummyData {
  id: number;
  label: string;
}
export const DUMMY_SECTION: dummyData[] = [
  {
    id: 0,
    label: translate.SECTIONS.MAIN,
  },
  {
    id: 1,
    label: translate.SECTIONS.TEST,
  },
];
