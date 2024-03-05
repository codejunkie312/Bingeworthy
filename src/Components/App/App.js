import SideBar from '../Sidebar/SideBar';
import Nav from '../Nav/Nav';
import './App.css';

function App() {
  return (
    <div id='bingeworthy' className="App">
      <div className="App-container">
        <Nav isLoggedIn={false} />
        <SideBar />
      </div>
    </div>
  );
}

export default App;
