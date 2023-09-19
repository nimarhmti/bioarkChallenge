import translate from "../../assets/translate/translate.json";
export interface subItemModel {
  id: string;
  label: string;
}
export interface optionsModel {
  id: Number;
  label: string;
  children?: subItemModel[];
}

export const optionData: optionsModel[] = [
  { id: 1, label: translate.PROFILE_OPTION.PROFILE },
  { id: 2, label: translate.PROFILE_OPTION.TEMPLATE },
  {
    id: 3,
    label: translate.PROFILE_OPTION.SECURITY,
    children: [
      { id: "31", label: translate.PROFILE_OPTION.MEETING },
      { id: "32", label: translate.PROFILE_OPTION.RESET_PASS },
    ],
  },
  { id: 4, label: translate.PROFILE_OPTION.VISUAL },
  {
    id: 5,
    label: translate.PROFILE_OPTION.INSURANCE,
    children: [
      { id: "51", label: translate.PROFILE_OPTION.SLAMAT },
      { id: "52", label: translate.PROFILE_OPTION.MOSALAH },
      { id: "53", label: translate.PROFILE_OPTION.TAMIN_EJTEMAEI },
      { id: "54", label: translate.PROFILE_OPTION.NOSKHE },
    ],
  },
  { id: 6, label: translate.PROFILE_OPTION.SETTING },
  { id: 7, label: translate.PROFILE_OPTION.EMAIL },
];
