// ActionProvider.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const handleGotIt = () => {
    const botMessage = createChatBotMessage('Please enter your name.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleName = () => {
    const botMessage = createChatBotMessage(`Hey, enter your age.`);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleAge = () => {
    const botMessage = createChatBotMessage(
      <>
      Thank you! <br />
       In 5 seconds, bot will exit.
    </>
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    setTimeout(() => {
      navigate('/page3');
    }, 4000); // Redirect to Page 3 after 4 seconds
  };

  const setUserResponseFromUser = (userMessage) => {
    if (name === '') {
      if (!isNaN(userMessage)) {
        const botMessage = createChatBotMessage('Please enter a valid name, not a number.');
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
        return;
      }
      setName(userMessage);
      handleName();
    } else if (age === '') {
      if (isNaN(userMessage)) {
        const botMessage = createChatBotMessage('Please enter a valid age, not a string.');
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
        return;
      }
      setAge(userMessage);
      handleAge();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGotIt,
            handleName,
            handleAge,
            setUserResponseFromUser,
          },
          user: {
            name,
            age,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
