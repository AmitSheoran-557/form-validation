import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/View/Home';
import About from './components/View/About';
import FormPage from './components/View/FormPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/form' element={<FormPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
