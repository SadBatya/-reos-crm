import { Switch } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import style from "./header.module.css";
import { useTheme } from "../providers/ThemeProvider";
import { useTranslation } from "react-i18next";
import { useState } from "react";


const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <div className={style.header}>
      <span>{t("main.header")}</span>
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
