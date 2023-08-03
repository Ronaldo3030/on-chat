import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Chat from './Pages/Chat';
import Home from './Pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
