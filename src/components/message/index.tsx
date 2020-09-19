import React from 'react';

import { Container, User } from './styles';

interface IUser {
  name: string;
  text: string;
  userId: string;
  avatar_url: string;
  tweet: any;
}

const Message: React.FC<any> = (user: IUser) => {
  return (
    <Container>
      <User>
        <img src={user.tweet.avatar_url} alt="Avatar_url" />
        <span>{user.tweet.name}</span>
      </User>
      <p>{user.tweet.text}</p>
    </Container>
  );
};

export default Message;
