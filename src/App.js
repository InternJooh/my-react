import logo from './logo.svg';
import './App.css';
import { Map } from './sections/Map/Map';
import { Sidebar } from './sections/Sidebar/Sidebar';
import { SideContent } from './sections/SideContent/SideContent';
import { useState } from 'react';

function App() {
  const sidebarOpen = ['홈', '', '내집내집', '커뮤니티', '메뉴'];
  const [sideContentVisible, setSideContentVisible] = useState(false);
  /* default 지도 active */
  const [sidebarActive, setSidebarActive] = useState(1);

  const handleNavClick = (text) => {
    /* open sideContent if in sidebarOpen */
    /* keep sideContent if in sidebarOpen */
    /* close sideContent if not in sidebarOpen */
    let indexToChange = sidebarOpen.indexOf(text);
    if (indexToChange > -1) {
      sideContentVisible || setSideContentVisible(!sideContentVisible);
      if (indexToChange === 1) {
        setSidebarActive(5);
        return;
      }
      setSidebarActive(indexToChange);
    } else {
      sideContentVisible && setSideContentVisible(!sideContentVisible);
      setSidebarActive(1);
    }
  }

  return (
    <div className="App">
      <Sidebar activeIndex={sidebarActive} onClick={handleNavClick} />
      {sideContentVisible && <SideContent />}
      {[1,2,3,4].map((val)=>{
        return <div>{val}</div>
      })}
      <Map onClick={handleNavClick} />
    </div>
  );
}

export default App;
