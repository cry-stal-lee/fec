import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  padding-top: 25px;
  padding-bottom: 15px;
`

const Container = styled.div`
  width: 100%;
  background-image: linear-gradient(#dedede, white 50%);
`;

const Arrow = styled.div`
  font-size: 12px;
  padding: 0px;
  margin-left: ${props => props.rating};
`;

const Right = styled.div`
  width: 33%;
  float: right;
  text-align: right;
  font-size: 80%;
`

const Left = styled.div`
  width: 33%;
  float: left;
  text-align: left;
  font-size: 80%;
`

const Middle = styled.div`
  width: 33%;
  float: left;
  text-align: center;
  font-size: 80%;
`

export default function Istic({type, value}) {
  const attributes = {
    Fit: ['Too small', 'Perfect', 'Too large'],
    Length: ['Too short', 'Perfect', 'Too long'],
    Comfort: ['Poor', 'Okay', 'Perfect'],
    Quality: ['Poor', 'Okay', 'Perfect'],
    Size: ['Too small', 'Perfect', 'Too large'],
    Width: ['Too narrow', 'Perfect', 'Too wide']
  }
  return (
    <Cont>
      <div><strong>{type}</strong></div>
      <Container>
        <Arrow rating={String(Number(value) / 5 * 100 - 3) + '%'}>▼</Arrow>
      </Container>
      <div>
        <Left>{attributes[type][0]}</Left>
        <Middle>{attributes[type][1]}</Middle>
        <Right>{attributes[type][2]}</Right>
      </div>
   </Cont>
  )
}