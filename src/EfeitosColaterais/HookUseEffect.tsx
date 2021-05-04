import React, {useEffect, useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

export const HookUseEffect: React.FC = () => {
  const [contador, setContador] = useState(5);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    setMensagem('O valor do contador foi atualizado ' + contador);
  }, [contador]);

  return (
    <View style={styles.container}>
      <Text>{contador}</Text>
      <Text>{mensagem}</Text>
      <Button
        title="Clique Aqui"
        onPress={() => {
          setContador(contador + 1);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
