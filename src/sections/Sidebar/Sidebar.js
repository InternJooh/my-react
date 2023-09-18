import './Sidebar.css';
import '../../App.css';
import { IconButton } from '../../components/IconButton';

export function Sidebar({ activeIndex, onClick }) {
  const textToAdd = `_active`;
  const buttonData = [
    {
      text: '홈',
      icon: `../../../images/sideBar/home.svg`
    },
    {
      text: '지도',
      icon: `../../../images/sideBar/map.svg`
    },
    {
      text: '내집내집',
      icon: `../../../images/sideBar/myHouse.png`
    },
    {
      text:'커뮤니티',
      icon: `../../../images/sideBar/community.svg`
    },
    {
      text: '메뉴',
      icon: `../../../images/sideBar/menu.svg`
    }
  ]

  return (
    <div className="Sidebar">
      {buttonData.map((button,index) => {
        const icon = index === activeIndex && index !== 2 ? insertStringAtIndex(button.icon, textToAdd) : button.icon;
        const status = index === activeIndex ? true : false;
        return (<IconButton key={index} activeStatus={status} icon={icon} text={button.text} onClick={onClick} />)
      })}
    </div>
  )
};

function insertStringAtIndex(originalString, insertString) {
  return (
    originalString.slice(0, -4) + insertString + originalString.slice(-4)
  );
}