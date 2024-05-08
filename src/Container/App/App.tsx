
import { Route, Routes } from 'react-router-dom';
import Home from '../../Page/Home';

function App() {
  return (
    <div className="App">
      <Routes>
            <Route path="/" element={<Home id={0} title={''} completed={false} />} />
          </Routes>
    </div>
  );
}

export default App;
