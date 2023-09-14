import logo from './logo.svg';
import './App.css';
import { Map } from './components/Map/Map';
import { Sidebar } from './components/Sidebar/Sidebar';
import { SideContent } from './components/SideContent/SideContent';
import { useState } from 'react';

function App() {
  const sidebarOpen = ['홈', '내집내집', '커뮤니티', '메뉴'];
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
      indexToChange !== 0 && indexToChange++;
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
      <Map />
    </div>
  );
}

export default App;
