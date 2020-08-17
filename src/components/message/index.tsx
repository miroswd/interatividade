import React from 'react';

import { Container, User } from './styles';

const Message: React.FC = ({ name, avatar_url, message }) => {
  return (
    <Container>
      <User>
        <img
          src="https://www.w3schools.com/howto/img_avatar2.png"
          alt="Avatar_url "
        />
        <span>Nome do Usuário</span>
      </User>
      <p>
        Mensagem que o usuário mandar com a hashtag, Mensagem que o usuário
        mandar com a hashtag Mensagem que o usuário mandar com a hashtag,
        Mensagem que o usuário mandar com a hashtag Mensagem que o usuário
        mandar com a hashtag, Mensagem que o usuário mandar com a hashtag
        Mensagem que o usuário mandar com a hashtag, Mensagem que o usuário
        mandar com a hashtag Mensagem que o usuário mandar com a hashtag,
        Mensagem que o usuário mandar com a hashtag Mensagem que o usuário
        mandar com a hashtag, Mensagem que o usuário mandar com a hashtag
      </p>
    </Container>
  );
};

export default Message;
