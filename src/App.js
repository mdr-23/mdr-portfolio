import {BrowserRouter as Router} from 'react-router-dom';
import Public from './Routes/Public';
import Navigation from './Components/Navigation';
import TVSwitcher from './Components/TVSwitcher';

function App() {
  
  return (
    <>
    <div className='App'>
      <TVSwitcher>
        <video src={require('./Images/bg-home.mp4')} autoPlay muted loop />
        <div className='p-3 mt-5 p-sm-5'>
          <Router className='AppContent'>
            <Navigation />
            <Public />
          </Router>
        </div>
      </TVSwitcher>
    </div>
    </>
  );
}

export default App;