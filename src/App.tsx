import './App.css'
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage/MainPage';
import TablePage from './Components/Pages/TablePage/TablePage';

const App: React.FC = () => {
  
  
  return (<>
    <Router basename="/">
      <NavBar />
      <Routes>
        <Route path="/react-telega" element={<MainPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/table" element={<TablePage />} />
      </Routes>
    </Router>
  </>

  );

}

export default App
