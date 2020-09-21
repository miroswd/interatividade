import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Inputs, Column, Buttons } from './styles';

const Register: React.FC<any> = () => {
  const [messageColumnOne, setMessageColumnOne] = useState<string>('');
  const [messageColumnTwo, setMessageColumnTwo] = useState<string>('');

  const handleSendMessageOne = useCallback(() => {
    const one = localStorage.getItem('@columnOne');

    if (one !== null) {
      const oneArray = JSON.parse(one);

      oneArray.push(messageColumnOne);

      localStorage.setItem('@columnOne', JSON.stringify(oneArray));
    } else {
      localStorage.setItem(
        '@columnOne',
        JSON.stringify(['1307822718394433536']),
      );
    }
    setMessageColumnOne('');
  }, [messageColumnOne]);

  const handleSendMessageTwo = useCallback(() => {
    const two = localStorage.getItem('@columnTwo');

    if (two === null) {
      localStorage.setItem(
        '@columnTwo',
        JSON.stringify(['1299281436558741505']),
      );
      return;
    }

    const twoArray = JSON.parse(two);

    twoArray.push(messageColumnTwo);

    localStorage.setItem('@columnTwo', JSON.stringify(twoArray));
    setMessageColumnTwo('');
  }, [messageColumnTwo]);

  const handleColumnOne = useCallback(e => {
    setMessageColumnOne(e.target.value);
  }, []);

  const handleColumnTwo = useCallback(e => {
    setMessageColumnTwo(e.target.value);
  }, []);

  const handleClearTweets = useCallback(() => {
    localStorage.removeItem('@columnOne');
    localStorage.removeItem('@columnTwo');
  }, []);

  return (
    <Container>
      <h2>Registrando Tweets</h2>
      <Inputs>
        <Column>
          <input
            type="text"
            id="one"
            placeholder="Id do tweet"
            onChange={e => handleColumnOne(e)}
            value={messageColumnOne}
          />
          <button type="button" onClick={handleSendMessageOne}>
            Coluna 1
          </button>
        </Column>
        <Column>
          <input
            type="text"
            id="two"
            placeholder="Id do tweet"
            onChange={e => handleColumnTwo(e)}
            value={messageColumnTwo}
          />
          <button type="button" onClick={handleSendMessageTwo}>
            Coluna 2
          </button>
        </Column>
      </Inputs>
      <Buttons>
        <button type="button">
          <Link to="/">Mensagens</Link>
        </button>
        <button type="button" onClick={handleClearTweets}>
          Apagar Tweets
        </button>
      </Buttons>
    </Container>
  );
};

export default Register;
