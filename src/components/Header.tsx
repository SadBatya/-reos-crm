import { Switch } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import style from "./header.module.css";
import { useTheme } from "../providers/ThemeProvider";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  const currentWeekNumber = dayjs().week();

  return (
    <>
      <div className={style.header}>
        <span>
          {currentWeekNumber} {t("main.header")}
        </span>
        <nav>
          <ul className={style.nav__list}>
            <Link className={style.nav__list_btn} to="/">
              <li>{t("main.navigation_btn-1")}</li>
            </Link>
            <Link className={style.nav__list_btn} to="/tasks">
              <li>{t("main.navigation_btn-2")}</li>
            </Link>
          </ul>
        </nav>
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
      <Outlet />
    </>
  );
};

export default Header;
