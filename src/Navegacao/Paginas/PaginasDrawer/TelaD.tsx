import React from 'react';
import {Button, View} from 'react-native';
import {TextoCentral} from '../../Componentes/TextoCentral';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

// import { Container } from './styles';

export const TelaD: React.FC<DrawerContentComponentProps> = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <Button
          title="Ir para TelaE"
          onPress={() => {
            navigation.navigate('TelaE');
          }}
        />
        <Button
          title="voltar para TelaD"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View style={{flex: 1}}>
        <TextoCentral corFundo="#3c10a4">Tela D</TextoCentral>
      </View>
    </View>
  );
};
