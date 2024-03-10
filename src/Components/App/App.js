import SideBar from '../Sidebar/SideBar';
import Nav from '../Nav/Nav';
import './App.css';
import { useState } from 'react';

function App() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div id='bingeworthy' className="App">
      <div className="App-container">
        <Nav isLoggedIn={false} handleClick={handleClick}/>
        <SideBar isActive={isActive}/>
      </div>
    </div>
  );
}

export default App;
