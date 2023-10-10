import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Styles/css/styles.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Public from './Routes/Public';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <video src={require('./Images/bg-home.mp4')} autoPlay muted loop />
      <div className='p-5'>
        <Router>
          <Navigation />
          <Public />
        </Router>
      </div>
    </div>
  );
}

export default App;