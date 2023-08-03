import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Chat from './Pages/Chat';
import Home from './Pages/Home';
import { ChatProvider } from './Components/ChatContext/ChatContext.js';


function App() {
  return (
    <BrowserRouter>
      <ChatProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </ChatProvider>
    </BrowserRouter>
  );
}

export default App;
