import React, {useState} from 'react';
import {Image, StatusBar, Text} from 'react-native';
import styled from 'styled-components/native';

export const ImageComponent: React.FC = () => {
  const [status, setStatus] = useState('');

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="blue"
        hidden={false}
        animated={true}
      />
      <Image
        source={require('./logoIFPB.png')}
        style={{width: 200, height: 200, backgroundColor: 'gray'}}
        resizeMode="center"
      />
      <Image
        source={{uri: 'https:www.google.com.br/google.jpg'}}
        style={{width: 200, height: 200}}
        resizeMode="contain"
        defaultSource={require('./placeholder.png')}
        onLoadStart={() => {
          setStatus('carregando');
        }}
        onLoad={() => setStatus('carregou!')}
      />
      <Text>{status}</Text>
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
