import { Switch } from 'antd'
import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import style from './header.module.css'
import { useTheme } from '../providers/ThemeProvider'
import { useTranslation } from 'react-i18next'

const Header: React.FC = () => {
  const { theme, toggleTheme} = useTheme()
  const { t,i18n } = useTranslation()

  

  return (
    <div className={style.header}>
      <span>Время недели</span>
      <div className={style.switchers}>
        <Switch checkedChildren='EN' unCheckedChildren='RU'/>
        <Switch onChange={toggleTheme} checkedChildren={<SunOutlined />} unCheckedChildren={<MoonOutlined />}  defaultChecked/>
      </div>
    </div>
  )
}


export default Header