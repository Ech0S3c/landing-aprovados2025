import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Aprovacao from './pages/aprovado';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/:id' element={ <Aprovacao /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
