import React from 'react';
import {Button, View} from 'react-native';
import {TextoCentral} from '../../Componentes/TextoCentral';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

// import { Container } from './styles';

export const TelaE: React.FC<DrawerContentComponentProps> = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <Button
          title="Abrir o Drawer"
          onPress={() => {
            navigation.openDrawer();
            setTimeout(() => {
              navigation.closeDrawer();
            }, 3000);
          }}
        />
        <Button
          title="testando o Toggle"
          onPress={() => {
            navigation.toggleDrawer();
            setTimeout(() => {
              navigation.closeDrawer();
            }, 3000);
          }}
        />
      </View>
      <View style={{flex: 1}}>
        <TextoCentral corFundo="#23c947">TelaE</TextoCentral>
      </View>
    </View>
  );
};
