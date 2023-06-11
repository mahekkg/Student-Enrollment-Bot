import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import Page1 from './components/Page1';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import config from './config';
import './App.css';
import Page3 from './components/Page3';
import store from './store';

const App = () => {
  const [enrolled, setEnrolled] = React.useState(false);

  const handleEnrollNow = () => {
    setEnrolled(true);
  };

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Page1 handleEnrollNow={handleEnrollNow} />} />
          {enrolled && <Navigate to="/chatbot" />}
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </Router>
    </Provider>
  );
};

const ChatbotPage = () => {
  return (
    <div className="chatbot-container">
      <Chatbot
        className="bot"
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default App;
