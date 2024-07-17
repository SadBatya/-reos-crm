import { Switch } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import style from "./header.module.css";
import { useTheme } from "../providers/ThemeProvider";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import dayjs from 'dayjs'

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  const currentWeekNumber = dayjs().week()

  return (
    <div className={style.header}>
      <span>{currentWeekNumber} {t("main.header")}</span>
      <div className={style.switchers}>
        <Switch
          checkedChildren="EN"
          unCheckedChildren="RU"
          onChange={() => changeLanguage(language === "ru" ? "en" : "ru")}
          checked={language === "en"}
        />
        <Switch
          onChange={toggleTheme}
          checkedChildren={<SunOutlined />}
          unCheckedChildren={<MoonOutlined />}
          defaultChecked
        />
      </div>
    </div>
  );
};

export default Header;
