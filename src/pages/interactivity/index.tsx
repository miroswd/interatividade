import React, { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import { Container, PrimaryContent, SecondContent } from './styles';

import Message from '../../components/message';
import api from '../../service/api';

const Interactivity: React.FC = () => {
  const [primaryColumn, setPrimaryColumn] = useState([]);
  const [secondColumn, setSecondColumn] = useState([]);
  const [loading, setLoading] = useState(false);

  interface IUser {
    name: string;
    text: string;
    userId: string;
  }

  const one = localStorage.getItem('@columnOne');
  const two = localStorage.getItem('@columnTwo');

  let columnOne = '';
  let columnTwo = '';

  if (one !== null) {
    const oneArray = JSON.parse(one);
    // oneArray.push('1306732819390115840');
    // localStorage.setItem('@columnOne', JSON.stringify(oneArray));
    const urlOne = oneArray.toString().replace(' ', '');

    columnOne = urlOne;
  }

  if (two !== null) {
    const twoArray = JSON.parse(two);
    const urlTwo = twoArray.toString().replace(' ', '');
    columnTwo = urlTwo;
  }

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const primaryResponse = await api.get(`1/${columnOne}`);
      const secondResponse = await api.get(`2/${columnTwo}`);
      setPrimaryColumn(primaryResponse.data);
      setSecondColumn(secondResponse.data);
      setLoading(false);
    };
    loadData();
  }, [columnOne, columnTwo]);

  return (
    <>
      {!loading && primaryColumn.length > 0 ? (
        <Container>
          <PrimaryContent>
            {primaryColumn.map((user: IUser) => (
              <Message key={user.userId} tweet={user} />
            ))}
          </PrimaryContent>

          <SecondContent>
            {secondColumn.map((user: IUser) => (
              <Message key={user.userId} tweet={user} />
            ))}
          </SecondContent>
        </Container>
      ) : (
        <div
          className="loading"
          style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <HashLoader color="#ddd" size={240} />
        </div>
      )}
    </>
  );
};

export default Interactivity;
