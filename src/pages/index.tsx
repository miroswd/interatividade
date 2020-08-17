import React, { useState } from 'react';

import { Container, PrimaryContent, SecondContent, User } from './styles';

import api from '../service/api';

import Message from '../components/message';

const Messages: React.FC = () => {
  const primaryContentUsers = [1, 2, 3];
  const secondContentUsers = [1, 2];

  const [primaryUser, setPrimaryUser] = useState([]);

  async function addUser() {
    const response = await api.get('/miroswd');
    console.log(response.data);
  }

  addUser();
  return (
    <Container>
      <PrimaryContent />

      <SecondContent>
        {secondContentUsers.map(user => (
          <Message name="Nome" avatar_url="url" message="oi" />
        ))}
      </SecondContent>
    </Container>
  );
};

export default Messages;
