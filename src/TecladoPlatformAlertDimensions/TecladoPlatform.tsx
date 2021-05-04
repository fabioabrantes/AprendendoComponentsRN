import React, {useEffect} from 'react';
import {Alert, Platform} from 'react-native';
import styled from 'styled-components/native';

// import { Container } from './styles';

export const TecladoPlatformAlert: React.FC = () => {
  useEffect(() => {
    Alert.alert(Platform.OS, 'SO', [
      {
        text: 'concordo',
        onPress: () => {
          Alert.alert('ok');
        },
      },
    ]);
  }, []);
  return (
    <Container>
      <KeyboardArea behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Logo />
        <Input />
        <BtnArea>
          <BtnSave title="salvar" onPress={() => {}} />
        </BtnArea>
      </KeyboardArea>
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.View`
  width: 100px;
  height: 100px;
  background-color: #000;
  margin-bottom: 20px;
`;
const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  border: 1px solid #000;
`;
const BtnArea = styled.View`
  margin-top: 10px;
`;

const BtnSave = styled.Button``;
const KeyboardArea = styled.KeyboardAvoidingView`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
