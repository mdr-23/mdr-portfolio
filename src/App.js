import {HashRouter} from 'react-router-dom';
import Public from './Routes/Public';
import Navigation from './Components/Navigation';
import TVSwitcher from './Components/TVSwitcher';

function App() {
  
  return (
    <>
    <div className='App'>
      <TVSwitcher>
        <video src={require('./Images/bg-home.mp4')} autoPlay muted loop playsInline />
        <div className='p-3 mt-5 p-sm-5'>
          <HashRouter hashtype='hashbang' className='AppContent'>
            <Navigation />
            <Public />
          </HashRouter>
        </div>
      </TVSwitcher>
    </div>
    </>
  );
}

export default App;