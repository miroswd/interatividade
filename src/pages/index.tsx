import React, { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import { Container, PrimaryContent, SecondContent } from './styles';

import Message from '../components/message';
import api from '../service/api';

const Messages: React.FC = () => {
  const [primaryColumn, setPrimaryColumn] = useState([]);
  const [secondColumn, setSecondColumn] = useState([]);
  const [loading, setLoading] = useState(false);

  interface IUser {
    name: string;
    text: string;
    userId: string;
  }

  localStorage.setItem(
    '@columnOne',
    JSON.stringify(['1306791543118888960', '1307082682325753856']),
  );
  const one = localStorage.getItem('@columnOne');

  let columnOne = '';
  if (one !== null) {
    const oneArray = JSON.parse(one);
    oneArray.push('1306732819390115840');
    localStorage.setItem('@columnOne', JSON.stringify(oneArray));
    const url = oneArray.toString().replace(' ', '');
    columnOne = url;
  }

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const primaryResponse = await api.get(`1/${columnOne}`);
      const secondResponse = await api.get(`2/1305975270197923856`);
      setPrimaryColumn(primaryResponse.data);
      setSecondColumn(secondResponse.data);
      setLoading(false);
    };
    loadData();
  }, [columnOne]);

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

export default Messages;
