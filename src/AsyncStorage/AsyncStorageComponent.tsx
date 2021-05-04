import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Container } from './styles';

export const AsyncStorageComponent: React.FC = () => {
  const [name, setName] = useState('');
  const [texto, setTexto] = useState('');

  const handleSaveTexto = async () => {
    let textoTemp = `O nome digitado foi ${name}`;
    try {
      if (name !== '') {
        await AsyncStorage.setItem('@name:Projeto', textoTemp);
        setName('');
      }
    } catch (error) {
      Alert.alert(error.message());
    }
  };

  const getTexto = async () => {
    try {
      const textSalvo = await AsyncStorage.getItem('@name:Projeto');
      if (textSalvo !== '' && textSalvo) {
        setTexto(textSalvo);
      }
    } catch (error) {
      Alert.alert(error.message());
    }
  };
  useEffect(() => {
    async function visualizarNome() {
      getTexto();
    }
    visualizarNome();
  }, [name]);
  return (
    <Container>
      <Input
        placeholder="digite seu nome"
        value={name}
        onChangeText={setName}
      />
      <Botao title="salvar" onPress={handleSaveTexto} />
      <NameArea>
        <Nome>{texto}</Nome>
      </NameArea>
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Input = styled.TextInput`
  font-size: 15px;
  border: 1px solid #000;
  height: 50px;
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
`;
const Botao = styled.Button``;

const NameArea = styled.View`
  padding: 20px;
  background-color: #ccc;
  width: 100%;
  margin-top: 10px;
`;
const Nome = styled.Text`
  font-size: 18px;
  text-align: center;
`;
