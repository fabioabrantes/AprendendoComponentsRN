import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface IProps {
  corFundo?: string;
}
export const TextoCentral: React.FC<IProps> = ({corFundo, children}) => {
  return (
    <View style={[styles.container, {backgroundColor: corFundo}]}>
      <Text style={[styles.texto]}> {children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 50,
    color: '#fff',
  },
});
