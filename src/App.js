import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './screens/home/Home';

import Tank from './components/Tank/Tank';
import Vertolet from './components/vertolet/Vertolet';
import Deltoplan from './components/deltoplan/Deltoplan';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/knowl' element={<Home />} />
          <Route path='/Tank' element={<Tank />} />
          <Route path='/Vert' element={<Vertolet />} />
          <Route path='/Delt' element={<Deltoplan />} />
          {/* Транспорт */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
