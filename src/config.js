// config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  initialMessages: [
    createChatBotMessage(
      <>
      Hello, Welcome to the student information system! <br />
      Click on Got it! to continue.
    </>
    , {
      widget: 'gotItButton',
    }),
  ],
  widgets: [
    {
      widgetName: 'gotItButton',
      widgetFunc: (props) => {
        const handleButtonClick = () => {
          props.actions.handleGotIt();
        };

        return <button className='btn' onClick={handleButtonClick}>Got it!</button>;
      },
    },
  ],
  customComponents: {
    header: () => (
      <div style={{ backgroundColor: '#efefef', padding: '8px', borderRadius: '3px' }}>
        Student Information System
      </div>
    ),
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#0284c7',
    },
    chatButton: {
      backgroundColor: '#0284c7',
    },
  },
};

export default config;
