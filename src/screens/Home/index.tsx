import React from 'react';
import { Container, Header, Content } from './styles';

import { Input } from '../../components/Input';
import { TimeCard } from '../../components/TimeCard';

import coverImg from '../../assets/cover.png';
import { CreditCard } from '../../components/Card';

export function Home() {
  return(
    <Container>
      <Header source={coverImg}>
        <Input placeholder='Pesquisar...' />
      </Header>
      
      <Content>
        <TimeCard />
      </Content>
    </Container>
  );
}
