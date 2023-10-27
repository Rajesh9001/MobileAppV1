import { Icons } from "../../ui/Icons";

import Colors from "./Colors";

export const constant = {
  SPACING: 16,
  borderRadius: 10,
  titleFontSize: 24,
  textFontSize: 16,
  subTextFontSize: 14,
};

export const drawerMenu = [
  {
    title: "Settings",
    bg: Colors.menu1,
    type: Icons.Feather,
    icon: "settings",
    route: "Cattle",
    menuList: [{ title: "Change Theme" }, { title: "Notify Me" }],
  },
  {
    title: "Todo's",
    bg: Colors.menu2,
    type: Icons.Feather,
    icon: "check-square",
    route: "Animals",
    menuList: [{ title: "Eat" }, { title: "Code" }, { title: "Sleep" }],
  },
  {
    title: "Projects",
    bg: Colors.menu3,
    type: Icons.Octicons,
    icon: "project",
    route: "Emu",
    menuList: [
      { title: "Portfolio" },
      { title: "Note-APP" },
      { title: "RN-Ui" },
    ],
  },
];
