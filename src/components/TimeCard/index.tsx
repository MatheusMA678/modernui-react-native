import React from 'react';

import { Container, Image, Title, Foundation } from './styles';

import unitedImg from '../../assets/united.png';

export function TimeCard(){
  return (
    <Container
      animation='slideInRight'
    >
      <Image 
        source={unitedImg}
        resizeMode='contain' 
        animation='pulse'
        delay={100}
        duration={1500}
        iterationCount='infinite'
      />

      <Title>Manchester United</Title>
      <Foundation>1878</Foundation>
    </Container>
  );
}