import React, {useEffect, useState} from 'react';

import styled from 'styled-components/native';

export const CalculadoraGorjeta: React.FC = () => {
  const [valorConta, setValorConta] = useState('');
  const [percentagemGorjeta, setPercentagemGorjeta] = useState(0);
  const [gorjeta, setGorjeta] = useState(0);

  function calc() {
    let valorNumerico = parseFloat(valorConta);
    if (valorNumerico) {
      setGorjeta((percentagemGorjeta / 100) * valorNumerico);
    }
  }
  useEffect(() => {
    calc();
  }, [valorConta, percentagemGorjeta]);

  return (
    <Container>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input
        placeholder="quanto deu a conta?"
        placeholderTextColor="#a9ce24"
        keyboardType="numeric"
        value={valorConta}
        onChangeText={valor => setValorConta(valor)}
      />
      <PctArea>
        <PctItem
          title="5%"
          onPress={() => {
            setPercentagemGorjeta(5);
          }}
        />
        <PctItem
          title="10%"
          onPress={() => {
            setPercentagemGorjeta(10);
          }}
        />
        <PctItem
          title="15%"
          onPress={() => {
            setPercentagemGorjeta(15);
          }}
        />
        <PctItem
          title="20%"
          onPress={() => {
            setPercentagemGorjeta(20);
          }}
        />
      </PctArea>
      <CalcButtonArea>
        <CalcButton title={`calcular ${percentagemGorjeta} %`} onPress={calc} />
      </CalcButtonArea>
      {gorjeta > 0 && (
        <ResultArea>
          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <ResultItem>R$ {parseFloat(valorConta).toFixed(2)}</ResultItem>

          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>
            R$ {gorjeta.toFixed(2)} ({percentagemGorjeta}%)
          </ResultItem>

          <ResultItemTitle>Valor Total</ResultItemTitle>
          <ResultItem>
            R$ {(parseFloat(valorConta) + gorjeta).toFixed(2)}
          </ResultItem>
        </ResultArea>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #e6e1e1;
`;
const HeaderText = styled.Text`
  font-size: 25px;
  text-align: center;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 18px;
  background-color: #eee;
  margin: 20px;
  border-radius: 10px;
  padding: 10px;
`;

const PctArea = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 30px;
  width: 80%;
`;
const PctItem = styled.Button`
  border-radius: 30px;
`;
const CalcButtonArea = styled.View`
  margin: 10px;
  width: 80%;
`;
const CalcButton = styled.Button``;
const ResultArea = styled.View`
  width: 100%;
  margin-top: 30px;
  background-color: #eee;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;
const ResultItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
const ResultItem = styled.Text`
  font-size: 15px;
  margin-bottom: 30px;
`;
